'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
var Jimp = require("jimp");
let sz = new fnSz.fnSz();

module.exports = function (Container) {

  Container.fnResizeImg = (path) => {
    return new Promise(function (resolve, reject) {
      let parts = path.split('.'),
        extension = parts[parts.length - 1];
      let origName = parts[parts.length - 2];
      Jimp.read(path).then(function (lenna) {
        let pathThumbnail = origName + '-thumbnail.' + extension;
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

  Container.fnCreateThumbAll = () => {
    return new Promise(function (resolve, reject) {
      let pathOld = '../../uploads/products_old/';
      let pathNew = 'uploads/products_old/';
      const fs = require('fs');
      try {
        fs.readdir(path.join(__dirname, pathOld), async (err, files) => {
          // console.tag('files').log(files)
          for(let i in files) {
            let file = files[i];
            if (file.indexOf('-thumbnail') < 0 && i<2) {
              if (file.indexOf('.jpg') > -1 || file.indexOf('.png') > -1) {
                console.log(pathNew + file)
                await Container.fnResizeImg(pathNew + file);
              }
            }
            // if (file.split('thumbnail').length > 1) {
            //   fs.unlink(path.join(__dirname, pathOld + file) ,function(err){
            //     if(err) return console.log(err);
            //     console.log('file deleted successfully');
            //   });
            // }
          }
          resolve(files);
        })
      } catch(err) {
        reject(err);
      }
    })
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
    let pathThumbnail = origName + '-thumbnail.' + extension;
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
};
