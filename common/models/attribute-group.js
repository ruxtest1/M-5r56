'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (AttributeGroup) {
  AttributeGroup.disableRemoteMethodByName('patchOrCreate');
  AttributeGroup.disableRemoteMethodByName('replaceOrCreate');
  AttributeGroup.disableRemoteMethodByName('create');
  AttributeGroup.disableRemoteMethodByName('createChangeStream');
  AttributeGroup.disableRemoteMethodByName('find');
  AttributeGroup.disableRemoteMethodByName('findById');
  AttributeGroup.disableRemoteMethodByName('findOne');
  AttributeGroup.disableRemoteMethodByName('prototype.patchAttributes');
  AttributeGroup.disableRemoteMethodByName('exists_head');
  AttributeGroup.disableRemoteMethodByName('replaceById');
  AttributeGroup.disableRemoteMethodByName('exists');
  AttributeGroup.disableRemoteMethodByName('deleteById');
  AttributeGroup.disableRemoteMethodByName('upsertWithWhere');
  AttributeGroup.disableRemoteMethodByName('updateAll');
  AttributeGroup.disableRemoteMethodByName('count');

  AttributeGroup.rmFindAttributeGroup = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: AttributeGroup,
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

  AttributeGroup.rmFindAttributeGroupAll = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let res = await sz.fnModelFind({}, AttributeGroup);
        let multiFn = [];
        for(let i in res) {
          let rowI = res[i];
          multiFn.push(app.models.Attributes.fnFindAttributeByGroupID(rowI.id))
        }
        if (multiFn.length) {
          let values = await sz.fnPromiseAll(multiFn);
          for(let i in res) {
            let rowI = res[i];
            rowI.attributes = values[i];
          }
        }

        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  AttributeGroup.rmAttributeGroupCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await AttributeGroup.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelCreate(body, AttributeGroup, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  AttributeGroup.rmAttributeGroupUpdate = function (body, attr_group__id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldAttributeGroup = await sz.fnFindById(attr_group__id, AttributeGroup);
        await sz.fnDataNotFound(oldAttributeGroup, 'ไม่พบข้อมูล AttributeGroup');

        let Transaction = await AttributeGroup.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(attr_group__id, body, AttributeGroup, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  AttributeGroup.rmAttributeGroupDelete = function (body, req, attr_group__id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("attr_group__id").log(attr_group__id);
    sz.cb = cb;

    (async () => {
      try {
        let oldAttributeGroup = await sz.fnFindById(attr_group__id, AttributeGroup);
        await sz.fnDataNotFound(oldAttributeGroup, 'ไม่พบข้อมูล AttributeGroup');

        const Transaction = await AttributeGroup.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(attr_group__id, AttributeGroup, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  AttributeGroup.rmAttributeGroupFindByID = function (req, attr_group__id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(attr_group__id, AttributeGroup);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  AttributeGroup.remoteMethod('rmFindAttributeGroup', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  AttributeGroup.remoteMethod('rmFindAttributeGroupAll', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/all', verb: 'get'}
  });

  AttributeGroup.remoteMethod('rmAttributeGroupCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  AttributeGroup.remoteMethod('rmAttributeGroupUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'attr_group__id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:attr_group__id', verb: 'put'}
  });

  AttributeGroup.remoteMethod('rmAttributeGroupDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'attr_group__id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:attr_group__id', verb: 'delete'}
  });

  AttributeGroup.remoteMethod('rmAttributeGroupFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'attr_group__id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:attr_group__id', verb: 'get'}
  });
};
