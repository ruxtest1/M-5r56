'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (Maps) {
  Maps.disableRemoteMethodByName('patchOrCreate');
  Maps.disableRemoteMethodByName('replaceOrCreate');
  Maps.disableRemoteMethodByName('create');
  Maps.disableRemoteMethodByName('createChangeStream');
  Maps.disableRemoteMethodByName('find');
  Maps.disableRemoteMethodByName('findById');
  Maps.disableRemoteMethodByName('findOne');
  Maps.disableRemoteMethodByName('prototype.patchAttributes');
  Maps.disableRemoteMethodByName('exists_head');
  Maps.disableRemoteMethodByName('replaceById');
  Maps.disableRemoteMethodByName('exists');
  Maps.disableRemoteMethodByName('deleteById');
  Maps.disableRemoteMethodByName('upsertWithWhere');
  Maps.disableRemoteMethodByName('updateAll');
  Maps.disableRemoteMethodByName('count');

  Maps.rmFindMap = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: Maps,
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

  Maps.rmGetListMap = (req, cb) => {
    sz.cb = cb;
    (async () => {
      try {
        let sql = "select * from list_maps where deleted_at is null";
        let res = await sz.fnSqlQuery(sql, Maps);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  Maps.rmMapCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await Maps.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelCreate(body, Maps, ts);
        await Transaction.commit();

          //เช็คเพื่อลบรูป
          await app.models.Container.fnDeleteFileFTP(body.delete_file || null);
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  Maps.rmMapUpdate = function (body, map_id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldMap = await sz.fnFindById(map_id, Maps);
        await sz.fnDataNotFound(oldMap, 'ไม่พบข้อมูล Map');

        let Transaction = await Maps.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(map_id, body, Maps, ts);
        await Transaction.commit();

          //เช็คเพื่อลบรูป
          await app.models.Container.fnDeleteFileFTP(body.delete_file || null);
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  Maps.rmMapDelete = function (body, req, map_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("map_id").log(map_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldMap = await sz.fnFindById(map_id, Maps);
        await sz.fnDataNotFound(oldMap, 'ไม่พบข้อมูล Map');

        const Transaction = await Maps.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(map_id, Maps, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  Maps.rmMapFindByID = function (req, map_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(map_id, Maps);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };
  Maps.remoteMethod('rmGetListMap', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/list-maps', verb: 'get'}
  });
  Maps.remoteMethod('rmFindMap', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  Maps.remoteMethod('rmMapCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  Maps.remoteMethod('rmMapUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'map_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:map_id', verb: 'put'}
  });

  Maps.remoteMethod('rmMapDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'map_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:map_id', verb: 'delete'}
  });

  Maps.remoteMethod('rmMapFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'map_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:map_id', verb: 'get'}
  });
};
