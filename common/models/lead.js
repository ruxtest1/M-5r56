'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');


module.exports = function (Leads) {
  Leads.disableRemoteMethodByName('patchOrCreate');
  Leads.disableRemoteMethodByName('replaceOrCreate');
  Leads.disableRemoteMethodByName('create');
  Leads.disableRemoteMethodByName('createChangeStream');
  Leads.disableRemoteMethodByName('find');
  Leads.disableRemoteMethodByName('findById');
  Leads.disableRemoteMethodByName('findOne');
  Leads.disableRemoteMethodByName('prototype.patchAttributes');
  Leads.disableRemoteMethodByName('exists_head');
  Leads.disableRemoteMethodByName('replaceById');
  Leads.disableRemoteMethodByName('exists');
  Leads.disableRemoteMethodByName('deleteById');
  Leads.disableRemoteMethodByName('upsertWithWhere');
  Leads.disableRemoteMethodByName('updateAll');
  Leads.disableRemoteMethodByName('count');

  Leads.leadStatus = {
    quotation: 'Quo',
    follow1: 'Follow 1',
    follow2: 'Follow 2',
    follow3: 'Follow 3',
  };

  /*
quotation ถ้าไม่มีเลขใบเสนอราคาใน quotation เกิน 3 วัน ให้ alert และค้างไว้จนกว่าจะใส่ค่า
   */
  Leads.fnGetAlertStatusQuotation = (days) => {
    let sz = new fnSz.fnSz();
    let sql = "SELECT\n" +
      "  a.id\n" +
      "FROM\n" +
      "  `leads` a\n" +
      "WHERE 1\n" +
      "  AND DATEDIFF(DATE(NOW()), a.modified_date) > _days\n" +
      "  AND a.`status` = '_status'\n" +
      "  AND\n" +
      "  (SELECT\n" +
      "    COUNT(b.id)\n" +
      "  FROM\n" +
      "    `smartquotation`.`quotation` b\n" +
      "  WHERE b.lead_id = a.id) = 0" +
      " and a.deleted_at is null";
    sql = sz.fnReplaceStr(sql, '_status', Leads.leadStatus.quotation);
    sql = sz.fnReplaceStr(sql, '_days', days);
    return sz.fnSqlQuery(sql, Leads);
  };

  /*
follow1 วันที่แก้ไข หากเกิน 3 วัน dif กับปัจจุบัน ให้ alert
   */
  Leads.fnGetAlertStatusFollow1 = (days) => {
    let sz = new fnSz.fnSz();
    let sql = "SELECT\n" +
      "  id\n" +
      "FROM\n" +
      "  `leads`\n" +
      "WHERE 1\n" +
      "  AND DATEDIFF(DATE(NOW()), modified_date) > _days\n" +
      "  AND `status` = '_status' and deleted_at is null" +
      " AND noti_follow_date is null";
    sql = sz.fnReplaceStr(sql, '_status', Leads.leadStatus.follow1);
    sql = sz.fnReplaceStr(sql, '_days', days);
    return sz.fnSqlQuery(sql, Leads);
  };

  /*
follow2 วันที่แก้ไข หากเกิน 5 วัน dif กับปัจจุบัน ให้ alert
   */
  Leads.fnGetAlertStatusFollow2 = (days) => {
    let sz = new fnSz.fnSz();
    let sql = "SELECT\n" +
      "  id\n" +
      "FROM\n" +
      "  `leads`\n" +
      "WHERE 1\n" +
      "  AND DATEDIFF(DATE(NOW()), modified_date) > _days\n" +
      "  AND `status` = '_status' and deleted_at is null" +
      " AND noti_follow_date is null";
    sql = sz.fnReplaceStr(sql, '_status', Leads.leadStatus.follow2);
    sql = sz.fnReplaceStr(sql, '_days', days);
    return sz.fnSqlQuery(sql, Leads);
  };

  /*
follow3 วันที่แก้ไข หากเกิน 3 วัน dif กับปัจจุบัน ให้ alert
   */
  Leads.fnGetAlertStatusFollow3 = (days) => {
    let sz = new fnSz.fnSz();
    let sql = "SELECT\n" +
      "  id\n" +
      "FROM\n" +
      "  `leads`\n" +
      "WHERE 1\n" +
      "  AND DATEDIFF(DATE(NOW()), modified_date) > _days\n" +
      "  AND `status` = '_status' and deleted_at is null" +
      " AND noti_follow_date is null";
    sql = sz.fnReplaceStr(sql, '_status', Leads.leadStatus.follow3);
    sql = sz.fnReplaceStr(sql, '_days', days);
    return sz.fnSqlQuery(sql, Leads);
  };

  /*
follow time วันที่แจ้งเตือนตามงาน น้อยกว่า หรือเท่ากับวันปัจจุบัน
   */
  Leads.fnGetAlertFollowTime = () => {
    let sz = new fnSz.fnSz();
    let sql = "SELECT\n" +
      "  id\n" +
      "FROM\n" +
      "  `leads`\n" +
      "WHERE 1\n" +
      "  AND DATE(noti_follow_date) <= date(now())\n" +
      "  AND `status` IN(_status) and deleted_at is null" +
      " AND noti_follow_date is not null";
    let arrStatus = [Leads.leadStatus.follow1, Leads.leadStatus.follow2, Leads.leadStatus.follow3];
    sql = sz.fnReplaceStr(sql, '_status',
      "'" + arrStatus.join("', '") + "'");
    return sz.fnSqlQuery(sql, Leads);
  };

  /*
follow New แจ้งเเตือนตัวที่ไม่มีการ add survey และ comment
   */
  Leads.fnGetAlertFollowNew = () => {
    let sz = new fnSz.fnSz();
    let sql = "" +
      "SELECT\n" +
      "  a.id\n" +
      "FROM\n" +
      "  leads a\n" +
      "WHERE a.`deleted_at` IS NULL\n" +
      "AND a.`id` NOT IN (SELECT a1.lead_id FROM `surveys` a1 WHERE a1.`deleted_at` IS NULL AND a1.`lead_id` = a.`id`)\n" +
      "AND a.`id` NOT IN (SELECT a2.lead_id FROM `comments` a2 WHERE a2.`deleted_at` IS NULL AND a2.`lead_id` = a.`id`)";
    return sz.fnSqlQuery(sql, Leads);
  };

  Leads.rmLeadCreate = function (body, req, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    let sz = new fnSz.fnSz(cb);
    let dateNow = sz.dnow(true);

    if (true) {
      const fnStart = async function (data) {
        try {
          if (sz.checkData(data.status)) {
            data.modified_date = dateNow;
          }
          let Transaction = await Leads.beginTransaction('READ COMMITTED');
          sz.Transaction = Transaction;
          console.time().file().tag('Transaction').log(Transaction);
          let ts = {transaction: Transaction};
          let res = await sz.fnModelCreate(data, Leads, ts);
          await Transaction.commit();
          sz._20000(res);
        } catch (err) {

          sz._50000(err);
        }
      };
      fnStart(body);
    } else {
      let cleaningData = {
        "account_id": 1,
        "room_id": 1,
        "maid_id": 1,
        "clean_cost": 500,
        "description": "ห้องเปื้อน",
        "date_clean": "2017-03-31 08:09:00",
        "created_at": "2017-03-31 08:09:00",
        "updated_at": null,
      };
      sz._20000(cleaningData);
    }
  };

  Leads.rmLeadFindByID = function (req, lead_id, cb) {
    let sz = new fnSz.fnSz(cb);
    let dateNow = sz.dnow(true);
    console.file().time().tag("query str").log(req.query);

    if (true) {
      const fnStart = async function (id) {
        try {
          let data = await sz.fnSqlQuery('select * from leads where deleted_at is null and id=' + id,
            Leads, false, true);
          if (sz.checkData(data)) {
            data = sz.fnConvertArrayShortDate(data, ['created_at']);
            data = sz.fnDeleteKey(data, ['updated_at', 'deleted_at']);
          }
          sz._20000(data);
        } catch (err) {
          sz._50000(err);
        }
      };
      fnStart(lead_id);
    } else {
      let cleaningData = {
        "account_id": 1,
        "room_id": 1,
        "maid_id": 1,
        "clean_cost": 500,
        "description": "ห้องเปื้อน",
        "date_clean": "2017-03-31 08:09:00",
        "created_at": "2017-03-31 08:09:00",
        "updated_at": null,
      };
      sz._20000(cleaningData);
    }
  };

  Leads.rmLeadGetListQuotation = function (req, lead_id, cb) {
    let sz = new fnSz.fnSz(cb);
    let dateNow = sz.dnow(true);
    console.file().time().tag("query str").log(req.query);

    const fnStart = async function (id) {
      try {
        let data = await sz.fnSqlQuery('select * from quotation where is_deleted = 0 and lead_id=' + id,
          sz.quotationModel, false);
        // if (sz.checkData(data)) {
        //   data = sz.fnConvertArrayShortDate(data, ['created_at']);
        //   data = sz.fnDeleteKey(data, ['updated_at', 'deleted_at']);
        // }
        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    };
    fnStart(lead_id);
  };

  Leads.rmLeadFind = function (req, cb) {
    let sz = new fnSz.fnSz(cb);
    console.file().time().tag("query str").log(req.query);

    const fnStart = async function (query) {
      try {
        let sql = "select * from leads where deleted_at is null order by created_at desc";

        let multiFn = [
          sz.fnSqlQuery(sql, Leads, false),//#0
          sz.fnModelFind({}, sz.setupModel),//#1
          sz.fnModelFind({}, sz.surveyModel),//#2
        ];
        let values = await sz.fnPromiseAll(multiFn);

        let data = values[0];
        let setup = values[1];
        let survey = values[2];
        data = sz.fnConvertArrayShortDate(data, ['created_at', 'updated_at'], true);
        for (let i in data) {
          let rowI = data[i];
          rowI.setup = [];
          rowI.survey = [];
          let setupData = sz.fnLoopGetArray(setup, ['lead_id'], rowI.id);
          if (sz.checkData(setupData)) {
            rowI.setup = setupData
          }
          let surveyData = sz.fnLoopGetArray(survey, ['lead_id'], rowI.id);
          if (sz.checkData(surveyData)) {
            rowI.survey = surveyData
          }
        }

        sz._20000(data);
      } catch (err) {
        sz._50000(err);
      }
    };
    fnStart(req.query);
  };

  /*
  set lead id ที่ตาราง quotation
   */
  Leads.rmLeadMapQuotation = function (body, lead_id, cb) {
    let sz = new fnSz.fnSz(cb);
    (async () => {
      try {
        let quotation = await sz.fnFindOne({quote_no: body.quote_no}, sz.quotationModel);
        await sz.fnDataNotFound(quotation, "ไม่พบข้อมูล Quotation");

        if (quotation.lead_id) {
          throw 'Quotation No "' + body.quote_no + '" ไม่สามารถเลือกได้'
        }

        let Transaction = await sz.quotationModel.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        let ts = {transaction: Transaction};
        let res = await sz.fnModelUpdateAll({quote_no: body.quote_no}, {lead_id: lead_id}, sz.quotationModel, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    })();
  };
  Leads.rmLeadUpdate = function (body, lead_id, cb) {
    console.file().time().tag("body").log(body);
    let sz = new fnSz.fnSz(cb);
    let dateNow = sz.dnow(true);
    if (true) {
      const fnStart = async function (id, data) {
        try {
          let oldLead = await sz.fnFindById(id, Leads);
          await sz.fnDataNotFound(oldLead, 'ไม่พบข้อมูล Lead');
          if (oldLead.status !== data.status) {
            data.modified_date = dateNow;
          }

          let Transaction = await Leads.beginTransaction('READ COMMITTED');
          sz.Transaction = Transaction;
          console.time().file().tag('Transaction').log(Transaction);
          let ts = {transaction: Transaction};
          let res = await sz.fnModelUpdate(id, data, Leads, ts);
          await Transaction.commit();
          sz._20000(res);
        } catch (err) {

          sz._50000(err);
        }
      };
      fnStart(lead_id, body);
    } else {
      console.log(body);
      let cleaningData = {
        "account_id": 1,
        "room_id": 1,
        "maid_id": 1,
        "clean_cost": 500,
        "description": "ห้องเปื้อน",
        "date_clean": "2017-03-31 08:09:00",
        "created_at": "2017-03-31 08:09:00",
        "updated_at": "2017-03-31 08:09:00",
      };

      sz._20000(cleaningData);
    }
  };

  Leads.rmLeadDelete = function (body, req, lead_id, cb) {
    console.file().time().tag("body").log(body);
    console.file().time().tag("query str").log(req.query);
    console.file().time().tag("lead_id").log(lead_id);
    let sz = new fnSz.fnSz(cb);
    const fnStart = async function (id, data) {
      try {
        const Transaction = await Leads.beginTransaction('READ COMMITTED');
        sz.Transaction = Transaction;
        console.time().file().tag('Transaction').log(Transaction);
        const ts = {transaction: Transaction};
        let res = await sz.fnMarkDelete(id, Leads, ts);
        await Transaction.commit();
        sz._20000(res);
      } catch (err) {
        sz._50000(err);
      }
    };
    fnStart(lead_id, body);
  };

  Leads.rmLeadAlert = (req, cb) => {
    let sz = new fnSz.fnSz(cb);
    (async () => {
      let res = {};

      let multiFn = [
        Leads.fnGetAlertStatusQuotation(3),//#0
        Leads.fnGetAlertStatusFollow1(3),//#1
        Leads.fnGetAlertStatusFollow2(5),//#2
        Leads.fnGetAlertStatusFollow3(3),//#3
        Leads.fnGetAlertFollowTime(),//#4
        Leads.fnGetAlertFollowNew(),//#5
      ];
      let values = await sz.fnPromiseAll(multiFn);
      res.quotation = values[0];
      res.follow1 = values[1];
      res.follow2 = values[2];
      res.follow3 = values[3];
      res.follow_time = values[4];
      res.follow_new = values[5];

      sz._20000(res);
    })();
  };

  Leads.remoteMethod('rmLeadCreate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'post'}
  });

  Leads.remoteMethod('rmLeadUpdate', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'lead_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:lead_id', verb: 'put'}
  });

  Leads.remoteMethod('rmLeadDelete', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'lead_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:lead_id', verb: 'delete'}
  });

  Leads.remoteMethod('rmLeadFindByID', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'lead_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:lead_id', verb: 'get'}
  });

  Leads.remoteMethod('rmLeadGetListQuotation', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
      {arg: 'lead_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:lead_id/quotations', verb: 'get'}
  });

  Leads.remoteMethod('rmLeadFind', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}},
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/', verb: 'get'}
  });

  Leads.remoteMethod('rmLeadMapQuotation', {
    accepts: [
      {arg: 'body', type: 'object', http: {source: 'body'}},
      {arg: 'lead_id', type: 'string', required: true}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/:lead_id/map-quotation', verb: 'put'}
  });

  Leads.remoteMethod('rmLeadAlert', {
    accepts: [
      {arg: 'req', type: 'object', http: {source: 'req'}}
    ],
    returns: {arg: 'return', type: 'object', root: true},
    http: {path: '/alerts', verb: 'get'}
  });
};
