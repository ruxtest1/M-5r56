/**
 * Created by Rux-PC on 11/3/2560.
 */
'use strict';

let console = process.console;
let server = require('./../server');
let md5 = require('md5');
const fnSz = require('../../common/lib/sz');
let sz = new fnSz.fnSz();
let isRandomNameImg = true;

module.exports = function (app) {

  app.dataSources.storage.connector.getFilename = function (origFile, req, res) {
    // let md5sum = crypto.createHash('md5');
    // let d = md5sum.digest('hex');
    let orig = origFile.name;
    let parts = orig.split('.'),
      extension = parts[parts.length - 1];
    let origName = parts[parts.length - 2];
    // return (new Date()).getTime()+'_'+parts[parts.length-2]+'.'+extension;
    // let rand = Math.random();
    // let genName = (new Date()).getTime()+'_'+parts[parts.length-2] + '-' + rand;
    // return md5(genName) + '.' + extension;
    if (isRandomNameImg) {
      let objDate = sz.fnObjDate();
      let rand = sz.fnRandomStr(5);
      origName = objDate.str_date_time + rand;
    }
    origName += '.' + extension;
    return origName;
  };

  let checkAutoMigrate = function (table) {
    console.log('fn:checkAutoMigrate, table:' + table);
    let ds = server.dataSources.mysql;
    return new Promise(function (resolve, reject) {
      ds.isActual(table, function (err, actual) {
        if (err)
          reject(err);
        try {
          if (!actual) {
            ds.automigrate(table, function (err, result) {
              if (err)
                reject(err);
              console.log('Tables ' + table + ' created in ', ds.adapter.name);
              resolve(result);
            });
          } else {
            //console.log('Tables ' + table + ' not create.');
            resolve(null);
          }
        } catch (err) {
          reject(err.message);
        }
      });
    });
  };

  let loopAutoMigrate = async function (tables) {
    console.log('fn:loopAutoMigrate')
    if (tables.length) {
      let result = [];
      for (let i in tables) {
        let rowI = tables[i];
        let res = await checkAutoMigrate(rowI);
        if (res) {
          result.push(res);
        }
      }
      return result;
    } else {
      return null;
    }
  };

  // let lbTables = ['AccessToken', 'ACL', 'RoleMapping', 'Role',
  //   'Leads', 'Surveys', 'Setups', 'Images', 'MapSurveyImages', 'Comments'
  // ];
  let lbTables = [
    'ACL',
    'AccessToken',
    'RoleMapping',
    // 'Role',
    'Roles',

    'Banks',
    'Categories',
    'Maps',
    'Products',
    'Vendors',
    'Videos',
    'Scuser',
  ];

  var fnCreateFolderUpload = () => {
        var fs = require('fs');
        var dirs = [
            './uploads',
            './uploads/ads-images',
            './uploads/categories',
            './uploads/maps',
            './uploads/products',
            './uploads/users',
            './uploads/vendor-files',
            './uploads/vendor-images',
        ];
        for(var i in dirs) {
          var dir = dirs[i];
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
        }
    }

  async function loopScript() {
    try {
      let mg = await loopAutoMigrate(lbTables);
    } catch (err) {
      console.tag('---------------------error').log(err.message)
      console.tag('---------------------error stack').log(err.stack)
      throw err;
    }
  }

  let startScript = false;
  if (startScript) {
    loopScript();
  }
    fnCreateFolderUpload();
};
