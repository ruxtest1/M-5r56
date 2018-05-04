'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (Banks) {
  Banks.disableRemoteMethodByName('patchOrCreate');
  Banks.disableRemoteMethodByName('replaceOrCreate');
  Banks.disableRemoteMethodByName('create');
  Banks.disableRemoteMethodByName('createChangeStream');
  Banks.disableRemoteMethodByName('find');
  Banks.disableRemoteMethodByName('findById');
  Banks.disableRemoteMethodByName('findOne');
  Banks.disableRemoteMethodByName('prototype.patchAttributes');
  Banks.disableRemoteMethodByName('exists_head');
  Banks.disableRemoteMethodByName('replaceById');
  Banks.disableRemoteMethodByName('exists');
  Banks.disableRemoteMethodByName('deleteById');
  Banks.disableRemoteMethodByName('upsertWithWhere');
  Banks.disableRemoteMethodByName('updateAll');
  Banks.disableRemoteMethodByName('count');

  Banks.rmFindBank = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: Banks,
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

  Banks.rmGetListBank = (req, cb) => {
    sz.cb = cb;
    (async () => {
      try {
        let sql = "select * from list_banks where deleted_at is null";
        let res = await sz.fnSqlQuery(sql, Banks);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  Banks.rmBankCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await Banks.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelCreate(body, Banks, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  Banks.rmBankUpdate = function (body, bank_id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldBank = await sz.fnFindById(bank_id, Banks);
        await sz.fnDataNotFound(oldBank, 'ไม่พบข้อมูล Bank');

        let Transaction = await Banks.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(bank_id, body, Banks, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  Banks.rmBankDelete = function (body, req, bank_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("bank_id").log(bank_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldBank = await sz.fnFindById(bank_id, Banks);
        await sz.fnDataNotFound(oldBank, 'ไม่พบข้อมูล Bank');

        const Transaction = await Banks.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(bank_id, Banks, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  Banks.rmBankFindByID = function (req, bank_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(bank_id, Banks);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };
  Banks.remoteMethod('rmGetListBank', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/list-banks', verb: 'get'}
  });
  Banks.remoteMethod('rmFindBank', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  Banks.remoteMethod('rmBankCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  Banks.remoteMethod('rmBankUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'bank_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:bank_id', verb: 'put'}
  });

  Banks.remoteMethod('rmBankDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'bank_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:bank_id', verb: 'delete'}
  });

  Banks.remoteMethod('rmBankFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'bank_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:bank_id', verb: 'get'}
  });
};
