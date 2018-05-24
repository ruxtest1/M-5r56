'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
var Jimp = require("jimp");
let sz = new fnSz.fnSz();
const fs = require('fs');
var datastore = require('@google-cloud/datastore');
var storage = require('@google-cloud/storage');

module.exports = function (Container) {

    Container.key_thumbnail = '-thumbnail';
    Container.url_google_file = 'https://storage.googleapis.com/marukyo-api/';
    Container.google_bucket_name = 'marukyo-api';

    Container.fnResizeImg = (path) => {
        return new Promise(function (resolve, reject) {
            let parts = path.split('.'),
                extension = parts[parts.length - 1];
            if (extension === 'txt') {
                resolve('no image');
            }
            let origName = parts[parts.length - 2];
            Jimp.read(path).then(function (lenna) {
                let pathThumbnail = origName + Container.key_thumbnail + '.' + extension;
                // console.tag('pathThumbnail').log(pathThumbnail);
                lenna.resize(app.get('Image').Resize, Jimp.AUTO)            // resize
                    .quality(app.get('Image').Quality)                 // set JPEG quality
                    .exifRotate()
                    // .greyscale()                 // set greyscale
                    .write(pathThumbnail); // save
                // console.log(lenna);

                resolve(lenna);

            }).catch(function (err) {
                // console.tag('err').line().log(err)
                resolve(null);
            });
        });
    };

    Container.fnReadFileFromPath = (from) => {
        return new Promise(function (resolve, reject) {
            fs.readdir(path.join(__dirname, from), (err, files) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(files);
                }
            });
        });
    };

    Container.fnRandomFileName = (file_name) => {
        let parts = file_name.split('.'),
            extension = parts[parts.length - 1];
        let origName = parts[parts.length - 2];
        let objDate = sz.fnObjDate();
        let rand = sz.fnRandomStr(5);
        origName = objDate.str_date_time + rand;
        origName += '.' + extension;
        return origName;
    };
    Container.fnRenameFile = async (container, file_name, new_file_name) => {
        return new Promise(function (resolve, reject) {
            try {
                new_file_name = new_file_name || file_name;
                let path = './uploads/' + container + "/" + file_name;
                let newPath = './uploads/' + container + "/" + new_file_name;
                fs.rename(path, newPath, function (err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({
                            path: newPath,
                            name: new_file_name,
                        });
                    }
                });
            } catch (err) {
                reject(err);
            }
        });
    };

    Container.fnDeleteFileGoogle = async (fileName) => {
        var gcs = storage({
            projectId: 'marukyo-api',
            keyFilename: './common/keys/marukyo-api-14f34710832c.json'
        });
        let bucketName = 'marukyo-api'
        var bucket = gcs.bucket(bucketName);
        if (!bucket) {
            throw 'No Bucket for delete file.';
        }
        var file = bucket.file(fileName);

        let fnDel = () => {
            return new Promise(function (resolve, reject) {
                file.delete(function (err, apiResponse) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(apiResponse);
                    }
                });
            });
        };
        return fnDel();
    };

    Container.fnUploadToGoogle = async (container, path, fileName) => {
        var gcs = storage({
            projectId: Container.google_bucket_name,
            keyFilename: './common/keys/marukyo-api-14f34710832c.json'
        });
        let bucketName = Container.google_bucket_name;
        var bucket = gcs.bucket(bucketName);
        if (!bucket) {
            throw 'No Bucket for upload';
            // let fnCreateBucket = ()=>{
            //     return new Promise(function (resolve, reject) {
            //         gcs.createBucket(container, function (err, bucket) {
            //             if (!err) {
            //                 resolve(bucket);
            //             } else {
            //                 reject(err)
            //             }
            //         });
            //     });
            // };
            // bucket = await fnCreateBucket();
        }
        console.tag('path:').log(path)
        // console.tag('bucket:').log(bucket)
        let destination = container + '/' + fileName;
        let fnUpload = (p) => {
            return new Promise(function (resolve, reject) {
                bucket.upload(p, {destination: destination}, function (err, file) {
                    if (!err) {
                        // console.log('file:', file)
                        resolve(file);
                    } else {
                        // console.log('error:', err)
                        reject(err);
                    }
                });
            });
        };
        await fnUpload(path);
        // console.log('file', file)
        return destination;

// Download a file from your bucket.
//         bucket.file('giraffe.jpg').download({
//             destination: '/photos/zoo/giraffe.jpg'
//         }, function (err) {
//         });
//
// // Streams are also supported for reading and writing files.
//         var remoteReadStream = bucket.file('giraffe.jpg').createReadStream();
//         var localWriteStream = fs.createWriteStream('/photos/zoo/giraffe.jpg');
//         remoteReadStream.pipe(localWriteStream);
//
//         var localReadStream = fs.createReadStream('/photos/zoo/zebra.jpg');
//         var remoteWriteStream = bucket.file('zebra.jpg').createWriteStream();
//         localReadStream.pipe(remoteWriteStream);
    };

    Container.fnResizeImgFromPath = (from, to) => {
        return new Promise(function (resolve, reject) {
            try {
                let res = [];
                fs.readdir(path.join(__dirname, from), async (err, files) => {
                    // console.tag('files').log(files)
                    //หารูป thumbnail
                    let arrResizeFinish = files.filter(val => val.indexOf(Container.key_thumbnail) >= 0);

                    // console.log('arrResizeFinish', arrResizeFinish.length)
                    //แปลงเป็นชื่อรูปหลัก
                    let arrMainResize = [];
                    arrResizeFinish.forEach((val) => {
                        arrMainResize.push(val.replace(Container.key_thumbnail, ''));
                    });
                    // console.log('arrMainResize', arrMainResize.length)
                    //หารูปที่ยังไม่ได้แปลง
                    let arrayForResize = files.filter((val) => {
                        return arrMainResize.indexOf(val) < 0 && val.indexOf(Container.key_thumbnail) < 0;
                    });
                    console.log('arrayForResize', arrayForResize)

                    for (let i in arrayForResize) {
                        let file = arrayForResize[i];
                        if (file.indexOf(Container.key_thumbnail) < 0) {
                            console.log(to + file)
                            let resize = await Container.fnResizeImg(to + file);
                            res.push(to + file);
                        }
                        // if (file.split('thumbnail').length > 1) {
                        //   fs.unlink(path.join(__dirname, pathOld + file) ,function(err){
                        //     if(err) return console.log(err);
                        //     console.log('file deleted successfully');
                        //   });
                        // }
                    }
                    resolve(res);
                });
            } catch (err) {
                reject(err);
            }
        });
    };

    Container.rmCreateThumbAll = function (req, cb) {
        sz.cb = cb;
        console.file().time().tag("query str").log(req.query);
        (async () => {
            try {
                let data = [];
                // let arrayFolder = [
                //     // 'ads-images',
                //     // 'categories',
                //     // 'maps',
                //     // 'users',
                //     // 'vendor-files',
                //     // 'vendor-images',
                //     'products',
                // ];
                // for (let i in arrayFolder) {
                //     let folder = arrayFolder[i];
                //     let from = '../../uploads/' + folder + '/';
                //     let to = 'uploads/' + folder + '/';
                //     let res = await Container.fnResizeImgFromPath(from, to);
                //     data.push(res);
                // }/api/containers/products/download/ตะกั่วหนีบ ทรงD-8pyu.jpg


                let fnBuildFile = async (container, fileName,) => {
                    let newFileName = Container.fnRandomFileName(fileName);
                    data.push(newFileName);

                    let objPath = await Container.fnRenameFile(container, fileName, newFileName);
                    await Container.fnUploadToGoogle(container, objPath.path, newFileName);

                    await Container.fnResizeImg(objPath.path.replace('./', ''));
                    let spName = newFileName.split('.');
                    let thumbnailName = spName[0] + Container.key_thumbnail + '.' + spName[1];
                    let pathThumbnail = objPath.path.replace(newFileName, thumbnailName);
                    await Container.fnUploadToGoogle(container, pathThumbnail, thumbnailName);

                    return {path: objPath.name, path_thumbnail: thumbnailName};
                };
                // let products = await sz.fnModelFind({}, app.models.Products);
                let products = await sz.fnSqlQuery("select * from products where deleted_at is null and id >334", app.models.Products);
                let multiFn = [];
                let noFile = [];
                for (let i in products) {
                    let rowI = products[i];
                    let container = 'products';
                    let isUpdate = false, dataUpdate = {};
                    if (rowI.image_gallery_path != null && rowI.image_gallery_path != '[]') {
                        isUpdate = true;
                        let arrPath = sz.fnStr2Json(rowI.image_gallery_path);
                        let newGallery = [];
                        for (let j in arrPath) {
                            let rowJ = arrPath[j];
                            let fileName = rowJ.path.replace('/api/containers/products/download/', '');
                            let path = 'uploads/' + container + "/" + fileName;
                            if (sz.fnCheckFileExists(path)) {
                                let uploadFile = await fnBuildFile(container, fileName);
                                newGallery.push({
                                    path: container + "/" +uploadFile.path,
                                    path_thumbnail: container + "/" +uploadFile.path_thumbnail,
                                    order: rowJ.order,
                                });
                            }
                        }
                        console.log(newGallery)
                        dataUpdate.image_gallery_path = sz.fnJson2Str(newGallery);
                    }
                    if (rowI.logo_path) {
                        isUpdate = true;
                        let fileName = rowI.logo_path.replace('/api/containers/products/download/', '');
                        let path = 'uploads/' + container + "/" + fileName;

                        if (sz.fnCheckFileExists(path)) {
                            let uploadFile = await fnBuildFile(container, fileName);
                            dataUpdate.logo_path = container + "/" +uploadFile.path;
                        } else {
                            noFile.push(fileName);
                            dataUpdate.logo_path = null;
                        }
                    }
                    if (isUpdate) {
                        await sz.fnModelUpdate(rowI.id, dataUpdate, app.models.Products)
                    }
                }
                sz._20000({
                    files: data,
                    no_file: noFile
                });
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    // Container.beforeRemote("upload", function (context, data, next) {
    //   console.tag('beforeRemote upload').log(data);
    //   next();
    // });

    Container.beforeRemote("removeFile", function (context, data, next) {
        let file = context.args;
        let path = 'uploads/' + file.container + "/" + file.file;
        let parts = path.split('.'),
            extension = parts[parts.length - 1];
        let origName = parts[parts.length - 2];
        let pathThumbnail = origName + Container.key_thumbnail + '.' + extension;
        sz.fnRemoveFile(pathThumbnail);
        next();
    });

    Container.afterRemote("upload", function (context, data, next) {
        (async () => {
            try {
                if (sz.checkData(data.result)) {
                    if (sz.checkData(data.result.files)) {
                        if (sz.checkData(data.result.files['files[]'])) {
                            let files = data.result.files['files[]'];
                            for (let i in files) {
                                let file = files[i];
                                let path = 'uploads/' + file.container + "/" + file.name;
                                let objPath = await Container.fnRenameFile(file.container, file.name);
                                let thumbnailName = '';
                                if (sz.fnCheckFileExists(path) && file.type.indexOf('image') > -1) {
                                    let spName = objPath.name.split('.');
                                    thumbnailName = spName[0] + Container.key_thumbnail + '.' + spName[1];
                                    console.log('thumbnailName:', thumbnailName)
                                    await Container.fnResizeImg(objPath.path.replace('./', ''));

                                    let pathThumbnail = objPath.path.replace(objPath.name, thumbnailName);
                                    console.log('pathThumbnail:', pathThumbnail)
                                    await Container.fnUploadToGoogle(file.container, pathThumbnail, thumbnailName);
                                }
                                await Container.fnUploadToGoogle(file.container, objPath.path, objPath.name);
                                data.google = {
                                    url: Container.url_google_file + file.container + '/' + objPath.name,
                                    name: file.container + '/' + objPath.name,
                                    url_thumbnail: Container.url_google_file + file.container + '/' + thumbnailName,
                                    name_thumbnail: file.container + '/' + thumbnailName,
                                };
                            }
                        }
                    }
                }
                next();
            } catch (err) {
                next(err);
            }
        })();
    });

    Container.rmRemoveFileGoogle = function (body, req, cb) {
        console.file().time().tag("body").log(body);
        console.file().time().tag("query str").log(req.query);
        sz.cb = cb;

        (async () => {
            try {
                // let Transaction = await ADS.beginTransaction('READ COMMITTED');
                // sz.Transaction = Transaction;
                // console.time().file().tag('Transaction').log(Transaction);
                // let ts = {transaction: Transaction};
                // let res = await sz.fnModelCreate(body, ADS, ts);
                // await Transaction.commit();
                // sz._20000(res);
            } catch (err) {

                sz._50000(err);
            }
        })();
    };


    Container.remoteMethod('rmCreateThumbAll', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}},
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/gen-thumbnail-all', verb: 'get'}
    });


    Container.remoteMethod('rmRemoveFileGoogle', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'req', type: 'object', http: {source: 'req'}},
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/remove-file', verb: 'post'}
    });
};
