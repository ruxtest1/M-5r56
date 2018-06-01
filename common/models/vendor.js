'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (Vendors) {
  Vendors.disableRemoteMethodByName('patchOrCreate');
  Vendors.disableRemoteMethodByName('replaceOrCreate');
  Vendors.disableRemoteMethodByName('create');
  Vendors.disableRemoteMethodByName('createChangeStream');
  Vendors.disableRemoteMethodByName('find');
  Vendors.disableRemoteMethodByName('findById');
  Vendors.disableRemoteMethodByName('findOne');
  Vendors.disableRemoteMethodByName('prototype.patchAttributes');
  Vendors.disableRemoteMethodByName('exists_head');
  Vendors.disableRemoteMethodByName('replaceById');
  Vendors.disableRemoteMethodByName('exists');
  Vendors.disableRemoteMethodByName('deleteById');
  Vendors.disableRemoteMethodByName('upsertWithWhere');
  Vendors.disableRemoteMethodByName('updateAll');
  Vendors.disableRemoteMethodByName('count');


  Vendors.pathFolderVendorImage = 'uploads/vendor-images/';
  Vendors.pathFolderVendorFile = 'uploads/vendor-files/';

  Vendors.rmFindVendor = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: Vendors,
          ts: null,
          query: req.query,
          and: null,
        };
        let res = await sz.fnModelFindPaging(filter);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  Vendors.rmVendorCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        body.file_certificate = sz.fnJson2Str(body.file_certificate);
        body.image_front_store_path = sz.fnJson2Str(body.image_front_store_path);

        let Transaction = await Vendors.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        if (body.is_vendor === true) {
          let user = await app.models.Scuser.fnCreateUserVendor(body, ts);
          body.user_id = user.id;
        }
        let res = await sz.fnModelCreate(body, Vendors, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  Vendors.rmVendorRegister = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        body.file_certificate = sz.fnJson2Str(body.file_certificate);
        body.image_front_store_path = sz.fnJson2Str(body.image_front_store_path);
        let Transaction = await Vendors.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        body.username = body.email;
        console.log(body)
        let res = await sz.fnModelCreate(body, Vendors, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  Vendors.rmVendorUpdate = function (body, vendor_id, cb) {
    console.file().time().tag("body").log(body);
    // let sz = new fnSz.fnSz();
    sz.cb = cb;
    (async () => {
      try {
        let oldVendor = await sz.fnFindById(vendor_id, Vendors);
        await sz.fnDataNotFound(oldVendor, 'ไม่พบข้อมูล Vendor');

        body.file_certificate = sz.fnJson2Str(body.file_certificate);
        body.image_front_store_path = sz.fnJson2Str(body.image_front_store_path);

        let Transaction = await Vendors.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        if (oldVendor.user_id) {
          body.emailVerified = true;
          let user = await app.models.Scuser.fnEditUserData(oldVendor.user_id, body, ts);
        } else {
          if (body.is_vendor === true) {
            body.emailVerified = true;
            let user = await app.models.Scuser.fnCreateUserVendor(body, ts);
            body.user_id = user.id;
          }
        }
        let res = await sz.fnModelUpdate(vendor_id, body, Vendors, ts);
        await Transaction.commit();

          //เช็คเพื่อลบรูป from google
          await app.models.Container.fnCheckDeleteFileGoogle(body.delete_file || null);
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  Vendors.rmVendorDelete = function (body, req, vendor_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("vendor_id").log(vendor_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldVendor = await sz.fnFindById(vendor_id, Vendors);
        await sz.fnDataNotFound(oldVendor, 'ไม่พบข้อมูล Vendor');

        const Transaction = await Vendors.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(vendor_id, Vendors, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  Vendors.rmVendorFindByID = function (req, vendor_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(vendor_id, Vendors);
        sz.fnDataNotFound(data, 'ไม่พบข้อมูลตัวแทน');
        data.is_vendor = data.user_id ? true : false;
        data.file_certificate = sz.fnStr2Json(data.file_certificate);
        data.image_front_store_path = sz.fnStr2Json(data.image_front_store_path);

        // let pathImg = Vendors.pathFolderVendorImage;
        // if (data.image_card_no_path) {
        //   let expImg = data.image_card_no_path.split('/');
        //   let strPath = pathImg + expImg[expImg.length-1];
        //   console.log(strPath)
        //   data.image_card_no_path = sz.fnCheckFileExists(strPath) ? data.image_card_no_path : null;
        // }
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };
  Vendors.remoteMethod('rmFindVendor', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  Vendors.remoteMethod('rmVendorCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  Vendors.remoteMethod('rmVendorRegister', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/register', verb: 'post'}
  });

  Vendors.remoteMethod('rmVendorUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'vendor_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:vendor_id', verb: 'put'}
  });

  Vendors.remoteMethod('rmVendorDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'vendor_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:vendor_id', verb: 'delete'}
  });

  Vendors.remoteMethod('rmVendorFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'vendor_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:vendor_id', verb: 'get'}
  });
};
