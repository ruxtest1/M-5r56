'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (Attributes) {
  Attributes.disableRemoteMethodByName('patchOrCreate');
  Attributes.disableRemoteMethodByName('replaceOrCreate');
  Attributes.disableRemoteMethodByName('create');
  Attributes.disableRemoteMethodByName('createChangeStream');
  Attributes.disableRemoteMethodByName('find');
  Attributes.disableRemoteMethodByName('findById');
  Attributes.disableRemoteMethodByName('findOne');
  Attributes.disableRemoteMethodByName('prototype.patchAttributes');
  Attributes.disableRemoteMethodByName('exists_head');
  Attributes.disableRemoteMethodByName('replaceById');
  Attributes.disableRemoteMethodByName('exists');
  Attributes.disableRemoteMethodByName('deleteById');
  Attributes.disableRemoteMethodByName('upsertWithWhere');
  Attributes.disableRemoteMethodByName('updateAll');
  Attributes.disableRemoteMethodByName('count');

  Attributes.fnFindAttributeByGroupID = (attribute_group_id) => {
    return sz.fnModelFind({attribute_group_id: attribute_group_id}, Attributes);
  };

  Attributes.rmFindAttribute = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let attr_group_id = req.query.attr_group_id;
        await sz.fnInvalidParameter(attr_group_id, 'กรุณาระบุ ประเภทคุณลักษณะ');

        let filter = {
          model: Attributes,
          ts: null,
          query: req.query,
          and : " AND attribute_group_id=" + attr_group_id,
        };
        let res = await sz.fnModelFindPaging(filter);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  Attributes.rmGetListAttribute = (req, cb) => {
    sz.cb = cb;
    (async () => {
      try {
        let sql = "select * from list_attributes where deleted_at is null";
        let res = await sz.fnSqlQuery(sql, Attributes);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  Attributes.rmAttributeCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await Attributes.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelCreate(body, Attributes, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  Attributes.rmAttributeUpdate = function (body, attribute_id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldAttribute = await sz.fnFindById(attribute_id, Attributes);
        await sz.fnDataNotFound(oldAttribute, 'ไม่พบข้อมูล Attribute');

        let Transaction = await Attributes.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(attribute_id, body, Attributes, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  Attributes.rmAttributeDelete = function (body, req, attribute_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("attribute_id").log(attribute_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldAttribute = await sz.fnFindById(attribute_id, Attributes);
        await sz.fnDataNotFound(oldAttribute, 'ไม่พบข้อมูล Attribute');

        const Transaction = await Attributes.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(attribute_id, Attributes, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  Attributes.rmAttributeFindByID = function (req, attribute_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(attribute_id, Attributes);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };
  Attributes.remoteMethod('rmGetListAttribute', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/list-attributes', verb: 'get'}
  });
  Attributes.remoteMethod('rmFindAttribute', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  Attributes.remoteMethod('rmAttributeCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  Attributes.remoteMethod('rmAttributeUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'attribute_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:attribute_id', verb: 'put'}
  });

  Attributes.remoteMethod('rmAttributeDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'attribute_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:attribute_id', verb: 'delete'}
  });

  Attributes.remoteMethod('rmAttributeFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'attribute_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:attribute_id', verb: 'get'}
  });
};
