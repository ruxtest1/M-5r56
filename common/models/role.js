'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (Roles) {
  Roles.disableRemoteMethodByName('patchOrCreate');
  Roles.disableRemoteMethodByName('replaceOrCreate');
  Roles.disableRemoteMethodByName('create');
  Roles.disableRemoteMethodByName('createChangeStream');
  Roles.disableRemoteMethodByName('find');
  Roles.disableRemoteMethodByName('findById');
  Roles.disableRemoteMethodByName('findOne');
  Roles.disableRemoteMethodByName('prototype.patchAttributes');
  Roles.disableRemoteMethodByName('exists_head');
  Roles.disableRemoteMethodByName('replaceById');
  Roles.disableRemoteMethodByName('exists');
  Roles.disableRemoteMethodByName('deleteById');
  Roles.disableRemoteMethodByName('upsertWithWhere');
  Roles.disableRemoteMethodByName('updateAll');
  Roles.disableRemoteMethodByName('count');

  Roles.rmFindRole = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: Roles,
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

  Roles.rmGetRoleAll = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {};
        let res = await sz.fnModelFind(filter, Roles);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  Roles.rmRoleCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await Roles.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelCreate(body, Roles, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  Roles.rmRoleUpdate = function (body, role_id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldRole = await sz.fnFindById(role_id, Roles);
        await sz.fnDataNotFound(oldRole, 'ไม่พบข้อมูล Role');

        let Transaction = await Roles.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(role_id, body, Roles, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  Roles.rmRoleDelete = function (body, req, role_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("role_id").log(role_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldRole = await sz.fnFindById(role_id, Roles);
        await sz.fnDataNotFound(oldRole, 'ไม่พบข้อมูล Role');

        const Transaction = await Roles.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(role_id, Roles, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  Roles.rmRoleFindByID = function (req, role_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(role_id, Roles);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  Roles.remoteMethod('rmFindRole', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  Roles.remoteMethod('rmRoleCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  Roles.remoteMethod('rmRoleUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'role_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:role_id', verb: 'put'}
  });

  Roles.remoteMethod('rmRoleDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'role_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:role_id', verb: 'delete'}
  });

  Roles.remoteMethod('rmRoleFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'role_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:role_id', verb: 'get'}
  });

  Roles.remoteMethod('rmGetRoleAll', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/all', verb: 'get'}
  });
};
