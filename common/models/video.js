'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (Videos) {
  Videos.disableRemoteMethodByName('patchOrCreate');
  Videos.disableRemoteMethodByName('replaceOrCreate');
  Videos.disableRemoteMethodByName('create');
  Videos.disableRemoteMethodByName('createChangeStream');
  Videos.disableRemoteMethodByName('find');
  Videos.disableRemoteMethodByName('findById');
  Videos.disableRemoteMethodByName('findOne');
  Videos.disableRemoteMethodByName('prototype.patchAttributes');
  Videos.disableRemoteMethodByName('exists_head');
  Videos.disableRemoteMethodByName('replaceById');
  Videos.disableRemoteMethodByName('exists');
  Videos.disableRemoteMethodByName('deleteById');
  Videos.disableRemoteMethodByName('upsertWithWhere');
  Videos.disableRemoteMethodByName('updateAll');
  Videos.disableRemoteMethodByName('count');

  Videos.rmFindVideo = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: Videos,
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

  Videos.rmVideoCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await Videos.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelCreate(body, Videos, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  Videos.rmVideoUpdate = function (body, video_id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldVideo = await sz.fnFindById(video_id, Videos);
        await sz.fnDataNotFound(oldVideo, 'ไม่พบข้อมูล Video');

        let Transaction = await Videos.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(video_id, body, Videos, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  Videos.rmVideoDelete = function (body, req, video_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("video_id").log(video_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldVideo = await sz.fnFindById(video_id, Videos);
        await sz.fnDataNotFound(oldVideo, 'ไม่พบข้อมูล Video');

        const Transaction = await Videos.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(video_id, Videos, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  Videos.rmVideoFindByID = function (req, video_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(video_id, Videos);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };
  Videos.remoteMethod('rmFindVideo', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  Videos.remoteMethod('rmVideoCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  Videos.remoteMethod('rmVideoUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'video_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:video_id', verb: 'put'}
  });

  Videos.remoteMethod('rmVideoDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'video_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:video_id', verb: 'delete'}
  });

  Videos.remoteMethod('rmVideoFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'video_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:video_id', verb: 'get'}
  });
};

