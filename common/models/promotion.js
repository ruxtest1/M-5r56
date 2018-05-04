'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (Promotions) {
  Promotions.disableRemoteMethodByName('patchOrCreate');
  Promotions.disableRemoteMethodByName('replaceOrCreate');
  Promotions.disableRemoteMethodByName('create');
  Promotions.disableRemoteMethodByName('createChangeStream');
  Promotions.disableRemoteMethodByName('find');
  Promotions.disableRemoteMethodByName('findById');
  Promotions.disableRemoteMethodByName('findOne');
  Promotions.disableRemoteMethodByName('prototype.patchAttributes');
  Promotions.disableRemoteMethodByName('exists_head');
  Promotions.disableRemoteMethodByName('replaceById');
  Promotions.disableRemoteMethodByName('exists');
  Promotions.disableRemoteMethodByName('deleteById');
  Promotions.disableRemoteMethodByName('upsertWithWhere');
  Promotions.disableRemoteMethodByName('updateAll');
  Promotions.disableRemoteMethodByName('count');

  Promotions.rmFindPromotion = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: Promotions,
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

  Promotions.rmPromotionCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await Promotions.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelCreate(body, Promotions, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  Promotions.rmPromotionUpdate = function (body, promotion_id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldPromotion = await sz.fnFindById(promotion_id, Promotions);
        await sz.fnDataNotFound(oldPromotion, 'ไม่พบข้อมูล Promotion');

        let Transaction = await Promotions.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(promotion_id, body, Promotions, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  Promotions.rmPromotionDelete = function (body, req, promotion_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("promotion_id").log(promotion_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldPromotion = await sz.fnFindById(promotion_id, Promotions);
        await sz.fnDataNotFound(oldPromotion, 'ไม่พบข้อมูล Promotion');

        const Transaction = await Promotions.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(promotion_id, Promotions, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  Promotions.rmPromotionFindByID = function (req, promotion_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(promotion_id, Promotions);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };
  Promotions.remoteMethod('rmFindPromotion', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  Promotions.remoteMethod('rmPromotionCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  Promotions.remoteMethod('rmPromotionUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'promotion_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:promotion_id', verb: 'put'}
  });

  Promotions.remoteMethod('rmPromotionDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'promotion_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:promotion_id', verb: 'delete'}
  });

  Promotions.remoteMethod('rmPromotionFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'promotion_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:promotion_id', verb: 'get'}
  });
};

