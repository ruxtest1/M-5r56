'use strict';

let config = require('../../server/config.json');
let path = require('path');
let fs = require('fs')
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();

module.exports = function (MapProductAttributes) {
  MapProductAttributes.disableRemoteMethodByName('patchOrCreate');
  MapProductAttributes.disableRemoteMethodByName('replaceOrCreate');
  MapProductAttributes.disableRemoteMethodByName('create');
  MapProductAttributes.disableRemoteMethodByName('createChangeStream');
  MapProductAttributes.disableRemoteMethodByName('find');
  MapProductAttributes.disableRemoteMethodByName('findById');
  MapProductAttributes.disableRemoteMethodByName('findOne');
  MapProductAttributes.disableRemoteMethodByName('prototype.patchAttributes');
  MapProductAttributes.disableRemoteMethodByName('exists_head');
  MapProductAttributes.disableRemoteMethodByName('replaceById');
  MapProductAttributes.disableRemoteMethodByName('exists');
  MapProductAttributes.disableRemoteMethodByName('deleteById');
  MapProductAttributes.disableRemoteMethodByName('upsertWithWhere');
  MapProductAttributes.disableRemoteMethodByName('updateAll');
  MapProductAttributes.disableRemoteMethodByName('count');

  MapProductAttributes.fnGetMapProductAttribute = (product_id, ts) => {
    return sz.fnModelFind({product_id: product_id}, MapProductAttributes, ts);
  };

  MapProductAttributes.rmFindMapProductAttribute = (req, cb) => {
    sz.cb = cb;
    console.log(app.userData);

    (async () => {
      try {
        let filter = {
          model: MapProductAttributes,
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

  MapProductAttributes.rmGetListMapProductAttribute = (req, cb) => {
    sz.cb = cb;
    (async () => {
      try {
        let product_id = req.query.product_id;
        let sql = "select * from map_product_attributes where deleted_at is null";
        if (sz.checkData(product_id)) {
          sql += ' and product_id=' + product_id;
        }
        sql += ' order by id';
        let res = await sz.fnSqlQuery(sql, MapProductAttributes);
        if (res.length) {
          let multiFn = [];
          let mapAttributeModel = app.models.MapAttributes;
          for (let i in res) {
            let rowI = res[i];
            multiFn.push(mapAttributeModel.fnGetMapAttribute(rowI.id));
          }
          if (multiFn.length) {
            let values = await sz.fnPromiseAll(multiFn);
            for (let i in res) {
              let rowI = res[i];
              let arrNameTh = [];
              let arrNameEn = [];
              rowI.map_attributes = values[i];
              for (let j in rowI.map_attributes) {
                let rowJ = rowI.map_attributes[j];
                arrNameTh.push(rowJ.group_name_th + ' - ' + rowJ.attribute_name_th);
                arrNameEn.push((rowJ.group_name_en || rowJ.group_name_th) + ' - ' + (rowJ.attribute_name_en || rowJ.attribute_name_th));
              }
              rowI.name_th = arrNameTh.join(', ');
              rowI.name_en = arrNameEn.join(', ');
            }
            res = sz.fnSortByKey(res, 'name_th');
          }
        }
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  MapProductAttributes.rmMapProductAttributeCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    sz.cb = cb;

    (async () => {
      try {
        let Transaction = await MapProductAttributes.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelCreate(body, MapProductAttributes, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };


  MapProductAttributes.rmMapProductAttributeUpdate = function (body, map_product_attribute_id, cb) {
    console.file().time().tag("body").log(body);
    sz.cb = cb;
    let dateNow = sz.dnow(true);
    (async () => {
      try {
        let oldMapProductAttribute = await sz.fnFindById(map_product_attribute_id, MapProductAttributes);
        await sz.fnDataNotFound(oldMapProductAttribute, 'ไม่พบข้อมูล MapProductAttribute');

        let Transaction = await MapProductAttributes.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};

        let res = await sz.fnModelUpdate(map_product_attribute_id, body, MapProductAttributes, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {

        sz._50000(err);
      }
    })();
  };

  MapProductAttributes.rmMapProductAttributeDelete = function (body, req, map_product_attribute_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("map_product_attribute_id").log(map_product_attribute_id);
    sz.cb = cb;

    (async () => {
      try {
        let oldMapProductAttribute = await sz.fnFindById(map_product_attribute_id, MapProductAttributes);
        await sz.fnDataNotFound(oldMapProductAttribute, 'ไม่พบข้อมูล MapProductAttribute');

        const Transaction = await MapProductAttributes.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(map_product_attribute_id, MapProductAttributes, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };


  MapProductAttributes.rmMapProductAttributeFindByID = function (req, map_product_attribute_id, cb) {
    sz.cb = cb;
    console.file().time().tag("query str").log(req.query);

    (async () => {
      try {
        let data = await sz.fnFindById(map_product_attribute_id, MapProductAttributes);
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };

  MapProductAttributes.remoteMethod('rmGetListMapProductAttribute', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'get'}
  });

  MapProductAttributes.remoteMethod('rmFindMapProductAttribute', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/find', verb: 'get'}
  });

  MapProductAttributes.remoteMethod('rmMapProductAttributeCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  MapProductAttributes.remoteMethod('rmMapProductAttributeUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'map_product_attribute_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:map_product_attribute_id', verb: 'put'}
  });

  MapProductAttributes.remoteMethod('rmMapProductAttributeDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'map_product_attribute_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:map_product_attribute_id', verb: 'delete'}
  });

  MapProductAttributes.remoteMethod('rmMapProductAttributeFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'map_product_attribute_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:map_product_attribute_id', verb: 'get'}
  });
};
