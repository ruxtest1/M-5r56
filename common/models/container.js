'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
var Jimp = require("jimp");
let sz = new fnSz.fnSz();
const fs = require('fs');

module.exports = function (Container) {

    Container.key_thumbnail = '-thumbnail';

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
                let arrayFolder = [
                    'ads-images',
                    'categories',
                    'maps',
                    'users',
                    'vendor-files',
                    'vendor-images',
                    'products',
                ];
                for (let i in arrayFolder) {
                    let folder = arrayFolder[i];
                    let from = '../../uploads/' + folder + '/';
                    let to = 'uploads/' + folder + '/';
                    let res = await Container.fnResizeImgFromPath(from, to);
                    data.push(res);
                }
                sz._20000(data);
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
                                // if (sz.fnCheckFileExists(path) && file.type.indexOf('image') > -1) {
                                //   await Container.fnResizeImg(path);
                                // }
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


    Container.remoteMethod('rmCreateThumbAll', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}},
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/gen-thumbnail-all', verb: 'get'}
    });
};
