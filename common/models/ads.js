'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (ADS) {
  ADS.disableRemoteMethodByName('patchOrCreate');
  ADS.disableRemoteMethodByName('replaceOrCreate');
  ADS.disableRemoteMethodByName('create');
  ADS.disableRemoteMethodByName('createChangeStream');
  ADS.disableRemoteMethodByName('find');
  ADS.disableRemoteMethodByName('findById');
  ADS.disableRemoteMethodByName('findOne');
  ADS.disableRemoteMethodByName('prototype.patchAttributes');
  ADS.disableRemoteMethodByName('exists_head');
  ADS.disableRemoteMethodByName('replaceById');
  ADS.disableRemoteMethodByName('exists');
  ADS.disableRemoteMethodByName('deleteById');
  ADS.disableRemoteMethodByName('upsertWithWhere');
  ADS.disableRemoteMethodByName('updateAll');
  ADS.disableRemoteMethodByName('count');

  ADS.rmFindAds = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: ADS,
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

  ADS.rmGetListAds = (req, cb) => {
    sz.cb = cb;
    (async () => {
      try {
        let sql = "select * from ads where deleted_at is null";
        let res = await sz.fnSqlQuery(sql, ADS);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  ADS.rmAdsCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await ADS.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelCreate(body, ADS, ts);
        await Transaction.commit();

          //เช็คเพื่อลบรูป
          await app.models.Container.fnDeleteFileFTP(body.delete_file || null);
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  ADS.rmAdsUpdate = function (body, ads_id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldAds = await sz.fnFindById(ads_id, ADS);
        await sz.fnDataNotFound(oldAds, 'ไม่พบข้อมูล Ads');

        let Transaction = await ADS.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(ads_id, body, ADS, ts);
        await Transaction.commit();

          //เช็คเพื่อลบรูป
          await app.models.Container.fnDeleteFileFTP(body.delete_file || null);
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  ADS.rmAdsDelete = function (body, req, ads_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("ads_id").log(ads_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldAds = await sz.fnFindById(ads_id, ADS);
        await sz.fnDataNotFound(oldAds, 'ไม่พบข้อมูล Ads');

        const Transaction = await ADS.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(ads_id, ADS, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  ADS.rmAdsFindByID = function (req, ads_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(ads_id, ADS);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };
  ADS.remoteMethod('rmGetListAds', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/list-ads', verb: 'get'}
  });
  ADS.remoteMethod('rmFindAds', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  ADS.remoteMethod('rmAdsCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  ADS.remoteMethod('rmAdsUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'ads_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:ads_id', verb: 'put'}
  });

  ADS.remoteMethod('rmAdsDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'ads_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:ads_id', verb: 'delete'}
  });

  ADS.remoteMethod('rmAdsFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'ads_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:ads_id', verb: 'get'}
  });
};
