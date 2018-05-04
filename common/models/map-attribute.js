'use strict';

let config = require('../../server/config.json');
let path = require('path');
let fs = require('fs')
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();

module.exports = function (MapAttributes) {
  MapAttributes.disableRemoteMethodByName('patchOrCreate');
  MapAttributes.disableRemoteMethodByName('replaceOrCreate');
  MapAttributes.disableRemoteMethodByName('create');
  MapAttributes.disableRemoteMethodByName('createChangeStream');
  MapAttributes.disableRemoteMethodByName('find');
  MapAttributes.disableRemoteMethodByName('findById');
  MapAttributes.disableRemoteMethodByName('findOne');
  MapAttributes.disableRemoteMethodByName('prototype.patchAttributes');
  MapAttributes.disableRemoteMethodByName('exists_head');
  MapAttributes.disableRemoteMethodByName('replaceById');
  MapAttributes.disableRemoteMethodByName('exists');
  MapAttributes.disableRemoteMethodByName('deleteById');
  MapAttributes.disableRemoteMethodByName('upsertWithWhere');
  MapAttributes.disableRemoteMethodByName('updateAll');
  MapAttributes.disableRemoteMethodByName('count');

  MapAttributes.fnGetMapAttribute = (map_product_id) => {
    let sql = "SELECT\n" +
      "  a.`id` AS map_attribute_id, a.`attribute_id`, a.`attribute_group_id`, a.`map_product_id`, b.`group_name_th`,\n" +
      "   b.`group_name_en`, b.`type`, c.`attribute_name_th`, c.`attribute_name_en`, c.`value_type`, c.`value`\n" +
      "FROM\n" +
      "  `map_attributes` a\n" +
      "  INNER JOIN `attribute_groups` b\n" +
      "    ON (a.`attribute_group_id` = b.`id`)\n" +
      "  INNER JOIN `attributes` c\n" +
      "    ON (a.`attribute_id` = c.`id`)" +
      " WHERE 1" +
      " and a.deleted_at is null";
    sql += " AND a.map_product_id=" + map_product_id;
    sql += " order by map_attribute_id";
    return sz.fnSqlQuery(sql, MapAttributes, false);
  };

  MapAttributes.rmFindMapAttribute = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: MapAttributes,
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

  MapAttributes.rmGetListMapAttribute = (req, cb) => {
    sz.cb = cb;
    (async () => {
      try {
        let map_product_id = req.query.map_product_id;
        let sql = "select * from map_attributes where deleted_at is null";
        if (sz.checkData(map_product_id)) {
          sql += ' and map_product_id=' + map_product_id;
        }
        let res = await sz.fnSqlQuery(sql, MapAttributes);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  MapAttributes.rmMapAttributeCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await MapAttributes.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        if (!body.map_product_id) {
          let mapProduct = await sz.fnModelCreate({product_id: body.product_id}, app.models.MapProductAttributes, ts);
          body.map_product_id = mapProduct.id;
        }

        let res = await sz.fnModelCreate(body, MapAttributes, ts);
        await Transaction.commit();

        res.data_attribute_group = await MapAttributes.fnGetMapAttribute(body.map_product_id);
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  MapAttributes.rmMapAttributeUpdate = function (body, map_attribute_id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldMapAttribute = await sz.fnFindById(map_attribute_id, MapAttributes);
        await sz.fnDataNotFound(oldMapAttribute, 'ไม่พบข้อมูล MapAttribute');

        let Transaction = await MapAttributes.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(map_attribute_id, body, MapAttributes, ts);
        await Transaction.commit();

        res.data_attribute_group = await MapAttributes.fnGetMapAttribute(body.map_product_id);
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  MapAttributes.rmMapAttributeDelete = function (body, req, map_attribute_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("map_attribute_id").log(map_attribute_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldMapAttribute = await sz.fnFindById(map_attribute_id, MapAttributes);
        await sz.fnDataNotFound(oldMapAttribute, 'ไม่พบข้อมูล MapAttribute');

        const Transaction = await MapAttributes.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(map_attribute_id, MapAttributes, ts);
        await Transaction.commit();

        res.data_attribute_group = await MapAttributes.fnGetMapAttribute(oldMapAttribute.map_product_id);
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  MapAttributes.rmMapAttributeFindByID = function (req, map_attribute_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(map_attribute_id, MapAttributes);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };
  MapAttributes.remoteMethod('rmGetListMapAttribute', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'get'}
  });

  MapAttributes.remoteMethod('rmFindMapAttribute', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  MapAttributes.remoteMethod('rmMapAttributeCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  MapAttributes.remoteMethod('rmMapAttributeUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'map_attribute_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:map_attribute_id', verb: 'put'}
  });

  MapAttributes.remoteMethod('rmMapAttributeDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'map_attribute_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:map_attribute_id', verb: 'delete'}
  });

  MapAttributes.remoteMethod('rmMapAttributeFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'map_attribute_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:map_attribute_id', verb: 'get'}
  });
};
