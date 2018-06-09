/**
 * Created by Develop-SC on 22/7/2559.
 */
const console = process.console;
const app = require('../../server/server');
let path = require('path');
const moment = require('moment');
const extendObj = require('util')._extend;
const deleteKey = require('key-del');
const config = require('../../server/config.json');
module.exports.fnSz = fnSz;

function fnSz() {
  /** dataForValidate เอาไว้รับค่าชนิดของข้อมูล
   * ex = {
     * id    :"int",
     * name  :"string",
     * created_on    : "date"
     * }
   */
  this.dataForValidate = '';

  /** input เอาไว้รับค่าที่รับเข้ามาทาง api
   * ex = {
     * id    :"1",
     * name  :"username",
     * created_on    : "2016-08-01"
     * }
   */
  this.input = '';
  this.bathTH = 'บาท';
  this.Transaction = null;
  this.ts = null;
  this.showLog = false;
  this.config = config;
  this.cb = null;

  this.fnGetHost = function () {
    let port = this.config.port ? ":" + this.config.port : '';
    return this.config.host + port + "/";
  };

  this.fnAssets = function (path) {
    let host = this.fnGetHost();
    return host + "assets/" + path;
  };

  /*
   Model
   */
  // this.accountModel = app.models.accounts;
  // this.propertyModel = app.models.properties;
  // this.buildingModel = app.models.buildings;
  // this.roomModel = app.models.rooms;
  // this.invoiceModel = app.models.invoices;
  // this.invoiceDetailModel = app.models.invoiceDetails;
  // this.invoiceDetailHistoryModel = app.models.invoiceDetailHistories;
  // this.paymentModel = app.models.payments;
  // this.expenseModel = app.models.expenses;
  // this.propertyTypeModel = app.models.propertyTypes;
  // this.bankAccountModel = app.models.bankAccounts;
  // this.bankModel = app.models.banks;
  // this.waitingListModel = app.models.waitingLists;
  // this.roomTypeModel = app.models.roomTypes;
  // this.facilityModel = app.models.facilities;
  // this.mapFacilityModel = app.models.mapFacilities;
  this.userModel = app.models.Scuser;
  // this.roleModel = app.models.Role;
  this.roleMappingModel = app.models.RoleMapping;
  // this.aclModel = app.models.ACL;
  // this.contractHistoryModel = app.models.contractHistories;
  // this.paymentHistoryModel = app.models.paymentHistories;
  // this.contractModel = app.models.contracts;
  // this.tenantModel = app.models.tenants;
  // this.bookingModel = app.models.bookings;
  // this.reservationModel = app.models.reservations;
  // this.moveOutModel = app.models.moveOuts;
  // this.cleaningModel = app.models.cleanings;
  // this.maidModel = app.models.maids;
  // this.repairModel = app.models.repairs;
  // this.configMeterModel = app.models.configMeters;

  this.leadModel = app.models.Leads;
  this.surveyModel = app.models.Surveys;
  this.setupModel = app.models.Setups;
  this.mapSurveyImageModel = app.models.MapSurveyImages;
  this.imageModel = app.models.Images;
  this.mapLeadModel = app.models.MapLeads;
  this.quotationModel = app.models.Quotation;
  this.roleModel = app.models.Roles;

  this.r = {
    _20000: {
      resultCode: '20000',
      accessToken: app.accessToken,
      time: new Date(),
      resultDescription: 'Success'
    },
    _20001: {
      resultCode: '20001',
      accessToken: app.accessToken,
      time: new Date(),
      resultDescription: 'Success not update'
    },
    _40301: {
      resultCode: '40301',
      accessToken: app.accessToken,
      time: new Date(),
      resultDescription: 'Missing or invalid parameter'
    },
    _40401: {
      resultCode: '40401',
      accessToken: app.accessToken,
      time: new Date(),
      resultDescription: 'Data not found'
    },
    _50000: {
      resultCode: '50000',
      accessToken: app.accessToken,
      time: new Date(),
      resultDescription: 'System Error'
    }
  };

  this._40401 = function () {
    console.tag('Warning !', 'End Process').time().file().warning('data not found');
    if (typeof this.cb == 'function')
      this.cb(null, this.r._40401)
    else return this.r._40401;
  };
  this.fnDataNotFound = async function (data, msg) {
    // console.file().time().tag("fnDataNotFound").log(data);
    msg = msg || 'Data not found'
    if (!this.checkData(data)) {
      var err = new Error(msg);
      if (typeof this.cb == 'function') {
        // console.tag('Warning !', 'End Process').time().file().warning('data not found');
        this.r._40401.resultDescription = msg;
        this.r._40401.stack = err.stack;
        await this.cb(null, this.r._40401)
        // throw this.extObj(res, this.r._40401);
      } else {
        // var res = {status: 400, message: 'Data not found', stack: new Error('Data not found').stack};
        // throw this.extObj(res, this.r._40401);
      }
      var res = {status: 400, message: msg, stack: err.stack};
      throw this.extObj(res, this.r._40401);
      return false;
    }
    return true;
  };

  this.fnGetErr = (err) => {
    let msg = '';
    if (typeof err === 'string') {
      msg = err;
    } else if (this.checkData(err.message)) {
      msg = err.message;
    } else if (this.checkData(err.msg)) {
      msg = err.msg;
    }
    return msg;
  };

  this._50000 = async function (data) {
    // console.tag('ERROR !', 'End Process').time().file().error(data);
    let msg = "ERROR !";
    if (typeof data === 'object') {
      if (this.checkData(data.message)) {
        msg = data.message;
      } else if (this.checkData(data.msg)) {
        msg = data.msg;
      } else {
        msg = data;
      }
      if (this.checkData(data.stack)) {
        this.r._50000.stack = data.stack;
      } else {
        let err = new Error(msg);
        this.r._50000.stack = err.stack;
      }
      console.tag(msg, 'End Process').time().file().error(this.r._50000);
    } else if (typeof data === 'string') {
      msg = data;
      let err = new Error(msg);
      this.r._50000.stack = err.stack;
      console.tag(msg, 'End Process').time().file().error(this.r._50000);
    } else {
      console.tag('ERROR Type!', typeof data).time().file().error(data);
    }
    if (this.Transaction !== null) {
      let rollback = await this.Transaction.rollback();
    }
    if (typeof this.cb === 'function') {
      this.r._50000.resultDescription = msg;
      await this.cb(null, this.r._50000)
    }
    else return this.r._50000;
  };
  this._40301 = function (msg) {
    console.tag('Warning !', 'End Process').time().file().warning('Missing or invalid parameter');
    if (this.checkData(msg) && typeof msg == 'string') {
      this.r._40301.resultDescription = msg;
    }
    if (typeof this.cb == 'function')
      this.cb(null, this.r._40301)
    else return this.r._40301;
  };
  this.fnInvalidParameter = async function (val, msg) {
    msg = msg || 'Missing or invalid parameter';
    if (!this.checkData(val)) {
      var err = new Error(msg);
      if (this.Transaction != null) {
        let rollback = await this.Transaction.rollback();
      }
      if (typeof this.cb == 'function') {
        this.r._40301.resultDescription = msg;
        this.r._40301.stack = err.stack;
        await this.cb(null, this.r._40301)
      } else {
        // var res = {status: 400, message: 'Missing or invalid parameter',
        //     stack: new Error('Missing or invalid parameter').stack};
        // throw this.extObj(res, this.r._40301);
      }
      var res = {
        status: 400, message: msg,
        stack: err.stack
      };
      console.tag(msg, 'End Process').time(new Date()).file().warning(this.r._40301);
      throw this.extObj(res, this.r._40301);
      return false;
    }
    return true;
  };
  this._20000 = function (data) {
    if (this.showLog) {
      var logData = JSON.stringify(data, this.subResult);
      logData = this.checkData(logData) ? logData : JSON.stringify(data);
      console.tag('Success', 'End Process', logData).time().file();
    }
    this.r._20000.data = data;
    if (this.checkData(data)) {
      this.r._20000.count = Array.isArray(data) ? data.length : 1;
    }
    if (typeof this.cb === 'function')
      this.cb(null, this.r._20000)
    else return this.r._20000;
  };

  this.subResult = function (key, callback) {
    try {
      if (typeof callback.length != 'undefined') {
        var roll = Math.abs((callback.length * 10 / 100));
        if (this.showLog) {
          console.log('Affected rows: ' + callback.length);
        }
        for (var i = 0; i < roll; i++) {
          if (this.showLog) {
            console.tag('result', 'sql').log(callback[i]);
          }
        }
      }
    } catch (e) {
      console.tag(e);
    }
  };
  this._res = function (res, data) {
    res.setHeader('Content-Type', 'application/json');
    var resCode;
    if (data.resultCode != '20000') {
      resCode = 500;
    } else {
      resCode = 200;
    }
    return res.status(resCode).json(data)
  };
  this.validate = function (validate, ctx) {
    if (this.showLog) {
      console.tag('input', arguments.callee.name).log(ctx);
    }
    /* todo validate ไว้ตรวจสอบค่าที่รับเข้ามาทาง api
     input
     -   dataForValidate,
     -   input
     */
    this.dataForValidate = validate;
    this.input = ctx;
    var check = false;
    var checkDate;
    for (var x in this.dataForValidate) {
      var y = ctx[x];
      if (y === "null" || y === null || y === "" || typeof y === "undefined") {
        this.dataForValidate[x] = "miss";
        check = true;
      }
      if (this.dataForValidate[x] == "int") {
        if (isNaN(parseFloat(ctx[x])) || y.length > 10) {
          this.dataForValidate[x] = "NaN";
          check = true;
        } else {
          ctx[x] = parseFloat(ctx[x]);
        }
      } else if ((this.dataForValidate[x] == "" || this.dataForValidate[x] == "string") && y.length > 255) {
        this.dataForValidate[x] = "data to large";
        check = true;
      } else if (this.dataForValidate[x] == "date") {
        // todo validate Date ***
        if (moment(ctx[x]).isValid()) {
          ctx[x] = moment(ctx[x]).format("YYYY-MM-DD HH:mm:ss");
        } else {
          this.dataForValidate[x] = 'Invalid date';
          check = true;
        }
      }
    }
    if (check) {
      if (this.showLog) {
        console.tag('fail').log(this.dataForValidate);
      }
      return false;
    } else {
      return true;
    }
  };

  this.fnReplaceStr = function (str, key, value) {
    var re = new RegExp(key, "gi");
    return str.replace(re, value);
  };

  /**
   * ค่า n คือตัวเลขที่ต้องการเปลี่ยนเป็น format เงิน
   * @param n
   * @returns {string}
   */
  this.formatMoney = function (n) {
    var
      c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
      (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  };
  this.formatMoneyThBath = function (n) {
    return this.formatMoney(n) + ' ' + this.bathTH;
  };
  this.invalidDate2 = function (j) {
    /** j only input array  [{ json : val }]
     *  */
    var data = JSON.parse(j);
    var callbackArray = [];
    console.tag('input').log(j);
    for (var i = 0; i < data.length; i++) {
      for (var x in data[i]) {
        /** thisData เก็บค่าข้อมูลของแต่ละรอบ */
        var thisData = data[i][x];
        /** ตรวจสอบข้อมูลที่เป็น string or object เพื่อนำไปตรวจสอบก่อนกว่ามันสามารถเป็นวันที่ได้หรือไม่ */
        if (typeof thisData == 'string' && isNaN(thisData) || typeof thisData == 'object') {
          k = new Date(thisData);
          console.tag(x).log(thisData);
          var isValid = moment(thisData).isValid();
          if (isValid) {
            thisData = moment(thisData).format("YYYY-MM-DD HH:mm:ss");
          }
        }
      }
      callbackArray.push(data[i]);
    }
    return callbackArray;
  };
  this.roundDemical = function (n, pos) {
    pos = pos || 2;
    var s = 1;
    for (var j = 0; j < pos; j++) {
      s += "0";
    }
    s = parseFloat(s);
    return Math.round(n * s) / s;
  };

  /**
   * ใช้กับการ query ข้อมูล return result
   * @param callback      // ข้อมูลที่ query ได้
   * @param model app.models.scacc_taxinvoice
   * @param sql
   * @param resMiss       // ข้อมูลที่ ตอบกลับหาก query ไม่เจอ
   * @param resError      // ข้อมูลที่ ตอบกลับหาก error
   * @param resSuccess    // ข้อมูลที่ ตอบกลับหาก เจอเข้อมูล
   */
  this.fnExecute = function (callback, model, sql, resMiss, resError, resSuccess) {
    sql = sql || {}; // {} = select * from ....
    resMiss = resMiss || this.r._40401;
    resError = resError || this.r._50000;
    resSuccess = resSuccess || this.r._20000;
    if (this.showLog) {
      console.tag('sql').log(sql);
    }
    let thisModel = model.dataSource, sz = this;
    thisModel.connector.execute(sql, function (err, result) {
      if (err) {
        if (sz.showLog) {
          console.tag('errs', 'sql').log(err);
        }
        return callback(resError);
      } else {
        if (result.length) {
          resSuccess.data = result;
          JSON.stringify(result);
          return callback(resSuccess);
        } else {
          if (sz.showLog) {
            console.log('data not found');
          }
          return callback(resMiss);
        }
      }
    })
  };

  this.fnFindOne = async function (filter, models, ts, cud) {
    const model = typeof models == 'string' ? app.models[models] : models;
    let sz = this;
    if (this.showLog) {
      console.file().time().tag("fnFindOne").log(JSON.stringify(filter));
    }
    let res = {};
    filter.deleted_at = null;
    if (this.checkData(ts)) {
      res = await model.find({where: filter}, ts);
    } else {
      res = await model.find({where: filter});
    }
    res = res[0]
    if (cud !== false) {
      res = sz.fnRemoveCUD(res);
    }
    return res;
  };

  this.fnFindById = function (id, models, ts, crud) {
    if (this.showLog) {
      console.file().time().tag("fnFindById").log(id);
    }
    const model = typeof models == 'string' ? app.models[models] : models;
    let filter = {id: id, deleted_at: null};
    // return this.fnFindOne(filter, model, ts, crud);
    if (this.checkData(ts)) {
      // return model.findById(id, {deleted_at: null}, ts);
      return this.fnFindOne(filter, model, ts);
    } else {
      // return model.findById(id, {deleted_at: null});
      return this.fnFindOne(filter, model, false, crud);

    }
  };

  this.fnModelFind = async function (filter, models, removeCUD, ts) {
    const model = typeof models == 'string' ? app.models[models] : models;
    let sz = this;
    if (this.showLog) {
      console.file().time().tag("fnFind").log(JSON.stringify(filter));
    }
    let res = {};
    filter.deleted_at = null;
    if (this.checkData(ts)) {
      res = await model.find({where: filter}, ts);
    } else {
      res = await model.find({where: filter});
    }
    if (removeCUD !== false) {
      res = sz.fnRemoveCUD(res);
    }
    return res;
  };

  this.fnGetTableName = (model) => {
    return model.dataSource.tableName(model.modelName);
  };

  this.fnGetArrayColumnNameFromModel = (model) => {
    const getModelDefinition = model.dataSource.getModelDefinition(model.modelName);
    let names = Object.keys(getModelDefinition.properties);
    let objName = [];
    for (let i in names) {
      let rowI = names[i];
      objName.push(rowI);
    }
    return objName;
  };

  this.fnGetColumnNameFromModel = (model) => {
    const getModelDefinition = model.dataSource.getModelDefinition(model.modelName);
    let names = Object.keys(getModelDefinition.properties);
    let objName = [];
    for (let i in names) {
      let rowI = names[i];
      objName.push({
        name: rowI,
        type: typeof getModelDefinition.properties[rowI].type,
      });
    }
    return objName;
  };
  /*
    this.fnBuildObjSearch = (model, text) => {
      let columnName = this.fnGetColumnNameFromModel(model);
      // columnName = this.fnDeleteKey(columnName, 'deleted_at');
      let and = [];
      console.log(model.dataSource.tableName(model.modelName));
      // console.log(isNaN(text));

      for(let i in columnName) {
        let filter = {};
        if (!columnName[i].type_date || !isNaN(text)) {
          filter[columnName[i].name] = {like: '%' + text + '%'};
          and.push(filter);
        } else {//เป็นตัวเลข

          //เป็น string
          if (isNaN(text)) {
            // filter[columnName[i].name] = {like: '%' + text + '%'};
          }
          // filter[columnName[i].name] = {like: '%' + text + '%'};
        }
      }
      return and;
    };*/

  this.fnBuildStringSearch = (model, text) => {
    let columnName = this.fnGetColumnNameFromModel(model);
    let or = [];
    for (let i in columnName) {
      or.push('(IFNULL(CONCAT(\'\', LOWER(`' + columnName[i].name + "`)), '') LIKE LOWER('%" + text + "%'))")
    }
    if (!or.length) {
      return null;
    }
    return " AND (" + or.join(' OR ') + ")";
  };
  /*
    this.fnModelFindPaging = async function (filters) {
      let take = filters.take, skip = filters.skip, textSearch = filters.search, order = filters.order,
        models = filters.model, ts = filters.ts, and = filters.and;
      const model = typeof models == 'string' ? app.models[models] : models;
      let sz = this;
      let res = {}, where = {};
      where.deleted_at = null;

      if (sz.checkData(textSearch)) {
        let or = this.fnBuildObjSearch(model, textSearch);
        if (sz.checkData(or)) {
          where.and = [{or: or}];
        }
      }
      if (this.checkData(where.and) && this.checkData(and)) {
        where.and.push(and)
      }

      let totalElements = 0;
      let filter = {limit: take, skip: skip, where: where};
      if (sz.checkData(order)) {
        filter.order = [order];
      }console.log(filter)
      if (this.checkData(ts)) {
        res = await model.find({filter: filter}, ts);
        totalElements = await model.count(filter, ts);
      } else {
        res = await model.find(filter);
        totalElements = await model.count(filter);
      }
      return {
        totalCount: totalElements,
        rows: res,
      };
    };*/

  this.fnModelFindPaging = async function (filters) {
    let take = filters.query.take || 10, skip = filters.query.skip || 0;
    let textSearch = filters.query.search || '';
    let order = filters.query.order || '';
    let sql = filters.sql || '';
    let models = filters.model, ts = filters.ts, and = filters.and;
    const model = typeof models == 'string' ? app.models[models] : models;
    let sz = this;
    console.tag('textSearch').log(textSearch);
    let res = {}, where = "", limit = " limit " + skip + "," + take;
    let tableName = this.fnGetTableName(model);
    if (!sql) {
      sql = "SELECT * FROM " + tableName + " where 1 ";
      let columns = this.fnGetArrayColumnNameFromModel(model);
      sql += columns.indexOf('deleted_at') > -1 ? ' AND deleted_at is null' : '';
    }

    if (sz.checkData(textSearch)) {
      let or = this.fnBuildStringSearch(model, textSearch);
      if (sz.checkData(or)) {
        where += " " + or;
      }
    }
    if (sz.checkData(and)) {
      where += " " + and;
    }

    let totalElements = 0;
    if (sz.checkData(order)) {
      order = " ORDER BY " + order;
    } else {
      order = "";
    }
    console.tag("Sql:").log(sql + where);
    if (this.checkData(ts)) {
      res = await this.fnSqlQueryTs(sql + where + order + limit, ts, models);
      let resTotal = await this.fnSqlQueryTs(sql, ts, models);
      totalElements = resTotal.length;
    } else {
      let multiFn = [
        this.fnSqlQuery(sql + where + order + limit, models, false),
        this.fnSqlQuery(sql + (where ? where : ''), models, false)
      ];
      let values = await this.fnPromiseAll(multiFn);
      res = values[0];
      totalElements = values[1].length;
    }
    return {
      totalCount: totalElements,
      rows: res,
    };
  };

  this.fnSqlQuery = function (sql, models, removeCUD, findOne) {
    let sz = this;
    return new Promise(function (resolve, reject) {
      let model = typeof models == 'string' ? app.models[models] : models;
      if (sz.showLog || true) {
        console.file().time().tag('sql').log(sql);
      }
      model.dataSource.connector.execute(sql, function (err, result) {
        if (err) {
          reject(err);
        } else {
          if (sz.showLog) {
            console.file().time().tag('result').log(JSON.stringify(result));
          }
          if (result.length && removeCUD !== false) {
            result = sz.fnRemoveCUD(result);
          }
          if (findOne === true) {
            if (sz.checkData(result)) {
              resolve(result[0])
            } else {
              resolve(null)
            }
          } else {
            resolve(result);
          }
        }

      });
    });
  };

  this.fnSqlQueryTs = function (query, ts, models) {
    let sz = this;
    return new Promise(function (resolve, reject) {
      let model = typeof models == 'string' ? app.models[models] : models;
      if (sz.checkData(ts)) {
        model.dataSource.connector.executeSQL(query, {}, ts, function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      } else {
        return sz.fnSqlQuery(query, models);
      }
    });

  };

  this.fnModelCreate = function (data, models, ts, forceDeleteID) {
    let sz = this;
    if (forceDeleteID !== false) {

      if (Array.isArray(data)) {
        for (let i in data) {
          data[i] = this.fnDeleteKey(data[i], ["id", "created_at", "updated_at", "deleted_at"]);
        }
      } else {
        data = this.fnDeleteKey(data, ["id", "created_at", "updated_at", "deleted_at"]);
      }
    }
    return new Promise(function (resolve, reject) {
      try {
        const model = typeof models == 'string' ? app.models[models] : models;
        if (sz.showLog) {
          console.file().time().tag('data').log(JSON.stringify(data));
        }
        let userData = app.userData || {};
        data.created_by = userData.id || 0;
        model.create(data, ts, function (err, res) {
          if (err) {
            if (sz.showLog) {
              console.file().time().tag('err').err(err);
            }
            reject(err);
          } else {
            if (sz.showLog) {
              console.file().time().tag('res').log(res);
            }
            res = sz.fnRemoveCUD(res);
            resolve(res);
          }
        });
      } catch (err) {
        if (sz.showLog) {
          console.file().time().tag('err').err(err);
        }
        reject(err);
      }
    });
  };

  this.fnModelUpdate = function (id, data, models, ts) {
    let sz = this;
    data = sz.fnDeleteKey(data, ['id']);
    data.updated_at = sz.dnow(true);
    return new Promise(async function (resolve, reject) {
      try {
        let userData = app.userData || {};
        data.updated_by = userData.id || 0;
        if (sz.showLog) {
          console.file().time().tag('data').log(JSON.stringify(data));
        }
        const model = typeof models == 'string' ? app.models[models] : models;
        await model.updateAll({id: id}, data, ts);
        let res = await sz.fnFindById(id, models, ts);
        // let res = await model.upsertWithWhere({id: id}, data, ts);
        res = sz.fnRemoveCUD(res);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  this.fnModelUpdateAll = function (filter, data, models, ts) {
    let sz = this;
    data = sz.fnDeleteKey(data, ['id']);
    data.updated_at = sz.dnow(true);
    filter.deleted_at = null;
    return new Promise(async function (resolve, reject) {
      try {
        if (sz.showLog) {
          console.file().time().tag('data').log(JSON.stringify(data));
        }
        const model = typeof models == 'string' ? app.models[models] : models;
        await model.updateAll(filter, data, ts);
        let res = await sz.fnModelFind(filter, models, ts);
        // let res = await model.upsertWithWhere({id: id}, data, ts);
        res = sz.fnRemoveCUD(res);
        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  };

  this.fnModelCheckDuplicate = async function (filter, id, models, ts) {
    filter.id = {
      neq: id
    };
    let res = await this.fnFindOne(filter, models, ts);
    if (this.checkData(res)) {
      return true;
    } else {
      return false;
    }
  };

  this.fnModelCheckDuplicateWithGet = async function (filter, id, models, ts) {
    filter.id = {
      neq: id
    };
    return this.fnFindOne(filter, models, ts);
  };

  this.fnModelCount = async function (filter, models, ts) {
    const model = typeof models == 'string' ? app.models[models] : models;
    filter.deleted_at = null;
    if (this.checkData(ts)) {
      return model.count(filter, ts);
    } else {
      return model.count(filter);
    }
  };

  this.fnMarkDelete = function (id, models, ts) {
    let data = {}, sz = this;
    data.deleted_at = this.dnow(true);
    return new Promise(async function (resolve, reject) {
      try {
        if (sz.showLog) {
          console.file().time().tag('data').log(JSON.stringify(data));
        }
        let userData = app.userData || {};
        data.deleted_by = userData.id || '';
        const model = typeof models == 'string' ? app.models[models] : models;
        let res = await model.updateAll({id: id}, data, ts);
        // let res = await model.upsertWithWhere({id: id}, data, ts);
        // let res = await sz.fnModelUpdate(id, data, model, ts);
        // res = sz.fnRemoveCUD(res);
        resolve(res);
      } catch (err) {
        reject();
      }
    });
  };

  this.fnMarkDeleteFromOld = function (data) {
    data.deleted_at = this.dnow(true);
    let userData = app.userData || {};
    data.deleted_by = userData.id || '';
    data.save();
  };

  /**
   * set time zone
   * @param timezone
   * @returns {*}
   */
  this.hasTimezone = function (timezone) {
    if (timezone) {
      return timezone
    } else {
      return 'Asia/Bangkok'
    }
  };

  this.fnDeleteKey = function (data, key) {
    return deleteKey(data, key);
  };

  this.fnRemoveCUD = function (data) {
    try {
      if (this.checkData(data)) {
        if (Array.isArray(data)) {
          for (var i in data) {
            data[i] = this.fnDeleteKey(data[i], ["created_at", "updated_at", "deleted_at"]);
          }
        } else {
          data = this.fnDeleteKey(data, ["created_at", "updated_at", "deleted_at"]);
        }
      }
    } catch (err) {
      if (this.showLog) {
        console.file().time().tag('error fnRemoveCUD:').error(err);
      }
    }
    return data;
  };

  this.fnFormatMoneyFromArray = function (data, key, showBath) {
    try {
      if (this.checkData(data)) {
        if (Array.isArray(data)) {
          for (var i in data) {
            var row = data[i];
            for (var j in key) {
              data[i][key[j] + "_thb"] = this.formatMoney(row[key[j]]) +
                (showBath === true ? " " + this.bathTH : "");
            }
          }
        } else {
          for (var j in key) {
            data[key[j] + "_thb"] = this.formatMoney(data[key[j]]) +
              (showBath === true ? " " + this.bathTH : "");
          }
        }
      }
    } catch (err) {
      if (this.showLog) {
        console.file().time().tag('error fnRemoveCUD:').error(err);
      }
    }
    return data;
  };

  this.convertDate = function (date) {
    var moment = require('moment-timezone');
    return moment(date).tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss');
  };

  this.convertTHShortDate = function (date, time) {
    if (!this.checkData(date)) {
      return date;
    }
    date = moment(date);
    let iMonth = parseInt(date.format("MM")), iYear = parseInt(date.format("YYYY"));
    iYear = (iYear + 1900 + 543) + "";
    iYear = iYear.substr(2, 4);

    return date.format('DD') + " " + this.fnGetMonthTH(iMonth, true) + " " + iYear + (time ? date.format(" เวลา HH.mm น.") : '');
  };

  this.fnConvertArrayShortDate = function (data, key, time) {
    try {
      if (this.checkData(data)) {
        if (Array.isArray(data)) {
          for (var i in data) {
            var row = data[i];
            for (var j in key) {
              data[i][key[j] + "_th"] = this.convertTHShortDate(row[key[j]], time);
            }
          }
        } else {
          for (var j in key) {
            data[key[j] + "_th"] = this.convertTHShortDate(data[key[j]], time);
          }
        }
      }
    } catch (err) {
      if (this.showLog) {
        console.file().time().tag('error fnRemoveCUD:').error(err);
      }
    }
    return data;
  };

  this.fnGetMonthTH = function (month, short) {
    month = month - 1;
    let thMonth = ["มกราคม", "กุมภาพันธ์", "มีนาคม",
      "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน",
      "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    let thShortMonth = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
    return short === true ? thShortMonth[month] : thMonth[month];
  };
  this.fnCurYear = function () {
    let date = moment();
    return parseInt(date.format("YYYY"));
  };
  this.fnCurMonth = function () {
    let date = moment();
    return parseInt(date.format("MM"));
  };
  this.fnCurDay = function () {
    let date = moment();
    return parseInt(date.format("DD"));
  };

  this.fnGetYearFromDate = function (date) {
    date = moment(date);
    return parseInt(date.format("YYYY"));
  };
  this.fnGetMonthFromDate = function (date) {
    date = moment(date);
    return parseInt(date.format("MM"));
  };
  this.fnThaiFullMonth = function (date, time, day) {
    date = moment(date);
    let iMonth = parseInt(date.format("MM")), iYear = parseInt(date.format("YYYY"));
    iYear = (iYear + 1900 + 543) + "";
    iYear = iYear.substr(2, 4);

    return (day === false ? '' : date.format('DD') + " ") + this.fnGetMonthTH(iMonth) + " " + iYear + (time ? date.format(" เวลา HH.mm น.") : '');
  };

  this.fnGetDate = function (year, month, day) {
    day = day || 1;
    month = month || this.fnCurMonth();
    let date = year + "-" + month + "-" + day;
    let objDate = this.fnObjDate(date);
    return objDate.date_time;
  };

  this.fnObjDate = function (dateString, addDay, addMonth, addYear) {
    // date = this.checkData(date) ? moment(date) : moment();
    // var dateString = 'Thu Jul 15 2016 19:31:44 GMT+0200 (CEST)';
    var dateObj = dateString ? new Date(dateString) : new Date();
    if (addDay) {
      dateObj = dateObj.setTime(dateObj.getTime() + (addDay * 86400000));
    }
    if (addMonth) {
      dateObj = dateObj.setMonth(dateObj.getMonth() + addMonth);
    }
    if (addYear) {
      dateObj = dateObj.setYear(dateObj.getYear() + addYear);
    }
    var momentObj = moment(dateObj);
    let date = moment(dateObj).format('YYYY-MM-DD');
    let momentDate = moment(new Date(date));
    let startOfYear = moment(new Date(date)).startOf('year');
    let endOfYear = moment(new Date(date)).endOf('year');
    let startOfMonth = moment(new Date(date)).startOf('month');
    let endOfMonth = moment(new Date(date)).endOf('month');
    return {
      year: momentObj.format('YYYY'),
      year_th: parseInt(momentObj.format('YYYY')) + 543,
      short_year_th: (parseInt(momentObj.format('YYYY')) + 543) - 2500,
      month: momentObj.format('MM'),
      month_th: this.fnGetMonthTH(momentObj.format('MM')),
      short_month_th: this.fnGetMonthTH(momentObj.format('MM'), true),
      day: momentObj.format('DD'),
      date: momentObj.format('YYYY-MM-DD'),
      date_time: momentObj.format('YYYY-MM-DD HH:mm'),
      time: momentObj.valueOf(),
      time_of_date: momentDate.valueOf(),
      str_date: momentDate.format('YYYYMMDD'),
      str_date_time: momentDate.format('YYYYMMDDHHmm'),
      date_start_of_month: startOfMonth.format('YYYY-MM-DD'),
      date_end_of_month: endOfMonth.format('YYYY-MM-DD'),
      date_start_of_year: startOfYear.format('YYYY-MM-DD'),
      date_end_of_year: endOfYear.format('YYYY-MM-DD'),
      day_start_of_month: startOfMonth.format('DD'),
      day_end_of_month: endOfMonth.format('DD'),
      day_start_of_year: startOfYear.format('DD'),
      day_end_of_year: endOfYear.format('DD'),
    }
  };

  this.fnDiffMonth = function (monthTo, yearTo, monthFrom, yearFrom) {
    return monthTo - monthFrom + (12 * (yearTo - yearFrom));
  };

  this.dnow = function (time) {
    var moment = require('moment-timezone');
    return time ? moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss') :
      moment().tz('Asia/Bangkok').format('YYYY-MM-DD');
  };

  this.fnLoopGetRow = function (list, key, value) {
    for (let i in list) {
      if (list[i][key] == value) {
        return list[i];
      }
    }
    return null;
  };

  this.fnLoopGetArray = function (list, key, value) {
    let data = [];
    for (let i in list) {
      if (list[i][key] == value) {
        data.push(list[i]);
      }
    }
    return data;
  };

  this.extObj = function (obj1, obj2) {
    if (this.showLog) {
      console.file().time().tag("extObj1").log(obj1);
      console.file().time().tag("extObj2").log(obj2);
    }
    return extendObj(obj1, obj2);
  };

  this.checkData = function (data) {
    let haveData = false;
    let type = typeof data;
    // console.tag('type:').log(type)
    switch (type) {
      case 'object':
        if (!data || data == null) {
          haveData = false;
        } else if (typeof data[0] !== 'undefined') {
          haveData = data.length != 0 ? true : false;
        } else if (data instanceof Date) {
          haveData = true;
        } else {
          haveData = Object.keys(data).length ? true : false;
        }
        break;
      case 'string':
        if (data) {
          haveData = true;
        }
        break;
      case 'number':
      case 'boolean':
      case 'function':
        haveData = true;
        break;
      default:
        haveData = false;
        break;
    }
    return haveData;
  };

  this.fnZeroFill = function (number, width) {
    width -= number.toString().length;
    if (width > 0) {
      return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + ""; // always return a string
  };

  this.fnJson2Str = function (json) {
    try {
      return JSON.stringify(json);
    } catch (err) {
      console.tag('err: fnJson2Str').file().time().log(err);
      return null;
    }
  };

  this.fnStr2Json = function (str) {
    try {
      return JSON.parse(str);
    } catch (err) {
      console.tag('err: fnStr2Json').file().time().log(err);
      return null;
    }
  };

  this.fnNum2Boolean = function (data, key) {
    try {
      if (this.checkData(data)) {
        if (Array.isArray(data)) {
          for (let i in data) {
            let row = data[i];
            for (let j in key) {
              data[i][key[j]] = row[key[j]] ? true : false;
            }
          }
        } else {
          for (let j in key) {
            data[key[j]] = data[key[j]] ? true : false;
          }
        }
      }
    } catch (err) {
      if (this.showLog) {
        console.file().time().tag('error fnRemoveCUD:').error(err);
      }
    }
    return data;
  }

  this.fnPromiseAll = (fns) => {
    return new Promise(function (resolve, reject) {
      try {
        Promise.all(fns).then(values => {
          resolve(values);
        }, reason => {
          reject(reason);//error
        })
      } catch (err) {
        reject(err);
      }
    })
  };

  this.fnCheckFileExists = (pathFile) => {
    try {
      let pathToRoot = '../../';
      let fs = require('fs');
      fs.statSync(path.join(__dirname, pathToRoot + pathFile));
      // console.log("File exists.");
      return true;
    }
    catch (e) {
      // console.log("File does not exist.");
      return false;
    }
  };

  this.fnGetPathImgThumb = (path) => {
    let parts = path.split('.'),
      extension = parts[parts.length - 1];
    let origName = parts[parts.length - 2];
    return origName + '-thumbnail.' + extension;
  };

  this.fnRemoveFile = (pathFile) => {
    let e = this;
      return new Promise(function (resolve, reject) {
        try {
          let pathToRoot = '../../';
          let fs = require('fs');
          if (e.fnCheckFileExists(pathFile)) {
              fs.unlink(path.join(__dirname, pathToRoot + pathFile), function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
              });
          }
            resolve(true);
        }
        catch (e) {
          console.log("error delete file.");
            reject(e);
        }
      });
  };

  this.fnRandomStr = function (length) {
    let text = "";
    let possible = "abcdefghklmnpqrstuvwxyz123456789";
    length = length || 4;
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  this.fnRandomStrNum = function (length) {
    let text = "";
    let possible = "123456789";
    length = length || 4;
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  this.fnSortByKey = function (obj, key, desc) {
    if (desc === true) {
      obj.sort(function (a, b) {
        return (a[key] < b[key]) ? 1 : ((b[key] < a[key]) ? -1 : 0);
      });
    } else {
      obj.sort(function (a, b) {
        return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
      });
    }
    return obj;
  };
}

String.prototype.dformat = function (dmy) {
  /** dmy
   *  คือ ปรับ format นำเข้าวันที่เป็น dd-mm-YYYY
   *  */
  var strDate = this.toString();
  strDate = new Date(strDate);
  var DateStr = new Date(strDate).toString();
  if (this.showLog) {
    console.tag("strDate").log(strDate);
  }
  if (DateStr == 'Invalid Date' || dmy) {
    return moment(this, 'DD-MM-YYYY HH:mm:ss').format("YYYY-MM-DD HH:mm:ss");
  } else {
    return moment(strDate).format("YYYY-MM-DD HH:mm:ss");
  }
};

String.prototype.iNumber = function () {
  var n = this;
  var
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

module.exports.fnModels = fnModels;

function fnModels() {
  this.fnAccount = function () {
    return app.models.accounts;
  };
  this.fnProperties = function () {
    return app.models.properties;
  };
  this.fnMapeventcalendars = function () {
    return app.models.map_event_calendars;
  }
}
