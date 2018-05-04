'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (ShippingMethods) {
  ShippingMethods.disableRemoteMethodByName('patchOrCreate');
  ShippingMethods.disableRemoteMethodByName('replaceOrCreate');
  ShippingMethods.disableRemoteMethodByName('create');
  ShippingMethods.disableRemoteMethodByName('createChangeStream');
  ShippingMethods.disableRemoteMethodByName('find');
  ShippingMethods.disableRemoteMethodByName('findById');
  ShippingMethods.disableRemoteMethodByName('findOne');
  ShippingMethods.disableRemoteMethodByName('prototype.patchAttributes');
  ShippingMethods.disableRemoteMethodByName('exists_head');
  ShippingMethods.disableRemoteMethodByName('replaceById');
  ShippingMethods.disableRemoteMethodByName('exists');
  ShippingMethods.disableRemoteMethodByName('deleteById');
  ShippingMethods.disableRemoteMethodByName('upsertWithWhere');
  ShippingMethods.disableRemoteMethodByName('updateAll');
  ShippingMethods.disableRemoteMethodByName('count');

  ShippingMethods.rmFindShippingMethod = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: ShippingMethods,
          ts: null,
          query: req.query,
          and : null,
        };
        let res = await sz.fnModelFindPaging(filter);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  ShippingMethods.rmGetListShippingMethod = (req, cb) => {
    sz.cb = cb;
    (async () => {
      try {
        let sql = "select * from shipping_method where deleted_at is null";
        let res = await sz.fnSqlQuery(sql, ShippingMethods);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  ShippingMethods.rmShippingMethodCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await ShippingMethods.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelCreate(body, ShippingMethods, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  ShippingMethods.rmShippingMethodUpdate = function (body, shipping_method_id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldShippingMethod = await sz.fnFindById(shipping_method_id, ShippingMethods);
        await sz.fnDataNotFound(oldShippingMethod, 'ไม่พบข้อมูล ShippingMethod');

        let Transaction = await ShippingMethods.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(shipping_method_id, body, ShippingMethods, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  ShippingMethods.rmShippingMethodDelete = function (body, req, shipping_method_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("shipping_method_id").log(shipping_method_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldShippingMethod = await sz.fnFindById(shipping_method_id, ShippingMethods);
        await sz.fnDataNotFound(oldShippingMethod, 'ไม่พบข้อมูล ShippingMethod');

        const Transaction = await ShippingMethods.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(shipping_method_id, ShippingMethods, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  ShippingMethods.rmShippingMethodFindByID = function (req, shipping_method_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(shipping_method_id, ShippingMethods);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };
  ShippingMethods.remoteMethod('rmGetListShippingMethod', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/list-shipping_method', verb: 'get'}
  });
  ShippingMethods.remoteMethod('rmFindShippingMethod', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  ShippingMethods.remoteMethod('rmShippingMethodCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  ShippingMethods.remoteMethod('rmShippingMethodUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'shipping_method_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:shipping_method_id', verb: 'put'}
  });

  ShippingMethods.remoteMethod('rmShippingMethodDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'shipping_method_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:shipping_method_id', verb: 'delete'}
  });

  ShippingMethods.remoteMethod('rmShippingMethodFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'shipping_method_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:shipping_method_id', verb: 'get'}
  });
};
