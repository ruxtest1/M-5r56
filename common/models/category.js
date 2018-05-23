'use strict';

let config = require('../../server/config.json');
let path = require('path');
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();


module.exports = function (Categories) {
    Categories.disableRemoteMethodByName('patchOrCreate');
    Categories.disableRemoteMethodByName('replaceOrCreate');
    Categories.disableRemoteMethodByName('create');
    Categories.disableRemoteMethodByName('createChangeStream');
    Categories.disableRemoteMethodByName('find');
    Categories.disableRemoteMethodByName('findById');
    Categories.disableRemoteMethodByName('findOne');
    Categories.disableRemoteMethodByName('prototype.patchAttributes');
    Categories.disableRemoteMethodByName('exists_head');
    Categories.disableRemoteMethodByName('replaceById');
    Categories.disableRemoteMethodByName('exists');
    Categories.disableRemoteMethodByName('deleteById');
    Categories.disableRemoteMethodByName('upsertWithWhere');
    Categories.disableRemoteMethodByName('updateAll');
    Categories.disableRemoteMethodByName('count');


    Categories.pathFolderCategory = 'uploads/categories/';

    Categories.fnCheckImagePath = (path) => {
        let pathImg = Categories.pathFolderCategory;
        if (path) {
            let expImg = path.split('/');
            let strPath = pathImg + expImg[expImg.length - 1];
            console.tag('strPath').log(strPath)
            return sz.fnCheckFileExists(strPath) ? path : null;
        }
        return null;
    };

    /*
    เช็คว่า path รูปเดิม มี thumbnail ไหม
     */
    Categories.fnSetPathImgThumb = (data, key) => {
        let path = data[key];
        path = Categories.fnCheckImagePath(path);
        data[key] = path;
        let pathThumb = null;
        if (path) {
            pathThumb = Categories.fnCheckImagePath(sz.fnGetPathImgThumb(path))
        }
        data[key + '_thumbnail'] = pathThumb;
        return data;
    };


    Categories.fnGetChild = async (parent) => {
        let sql = '';
        if (parent === null) {
            sql = 'SELECT\n' +
                '  a.*,\n' +
                '  (SELECT\n' +
                '    COUNT(a1.id)\n' +
                '  FROM\n' +
                '    products a1 INNER JOIN `categories` a2\n' +
                '    ON (a1.category_id = a2.id)\n' +
                '  WHERE a1.deleted_at IS NULL\n' +
                '    AND a2.parent = a.id) AS count_product\n' +
                'FROM\n' +
                '  `categories` a\n' +
                'WHERE 1\n' +
                '  AND a.`deleted_at` IS NULL';
            sql += ' and (a.parent = 0 or a.parent is null)';
        } else {
            sql = 'select a.*, (select count(a1.id) from products a1 where a1.deleted_at is null and a1.category_id=a.id) as count_product' +
                ' from categories a where a.deleted_at is null';
            sql += ' and a.parent=' + parent;
        }
        sql += ' ORDER BY `order`';
        return sz.fnSqlQuery(sql, Categories, false);
    };

    Categories.rmFindCategory = (req, cb) => {
        sz.cb = cb;
        (async () => {
            try {
                let data = await Categories.fnGetChild(null);
                let multiFn = [];
                for (let i in data) {
                    let rowI = data[i];
                    data[i] = Categories.fnSetPathImgThumb(data[i], 'image_icon');
                    multiFn.push(Categories.fnGetChild(rowI.id));
                }
                let values = await sz.fnPromiseAll(multiFn);
                for (let i in data) {
                    let rowI = data[i];
                    rowI.expanded = true;
                    rowI.text = rowI.name_th;

                    let value = values[i];
                    for (let j in value) {
                        value[j] = Categories.fnSetPathImgThumb(value[j], 'image_icon');
                        value[j].expanded = true;
                        value[j].text = value[j].name_th;
                    }
                    rowI.items = value;
                }
                sz._20000(data);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Categories.rmFindCategoryMain = (req, cb) => {
        sz.cb = cb;
        (async () => {
            try {
                let data = await Categories.fnGetChild(null);
                for (let i in data) {
                    data[i] = Categories.fnSetPathImgThumb(data[i], 'image_icon');
                }
                sz._20000(data);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Categories.rmFindCategorySub = (req, cb) => {
        sz.cb = cb;
        (async () => {
            try {
                let main_id = req.query.main_id;
                let data = await Categories.fnGetChild(main_id);
                for (let i in data) {
                    data[i] = Categories.fnSetPathImgThumb(data[i], 'image_icon');
                }
                sz._20000(data);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Categories.rmFindCategoryGroup = (req, cb) => {
        sz.cb = cb;
        (async () => {
            try {
                let data = await Categories.fnGetChild(null);
                let multiFn = [];
                for (let i in data) {
                    let rowI = data[i];
                    multiFn.push(Categories.fnGetChild(rowI.id));
                }
                let values = await sz.fnPromiseAll(multiFn);
                let newData = [];
                for (let i in data) {
                    let rowI = data[i];
                    let value = values[i];
                    let newObj = {
                        Category: rowI.name_th,
                    };
                    for (let j in value) {
                        newData.push({
                            Category: rowI.name_th,
                            ID: value[j].id,
                            Name: value[j].name_th,
                        });
                    }
                }
                sz._20000(newData);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Categories.rmCategoryCreate = function (body, req, cb) {
        console.file().time().tag("body").log(body);
        console.file().time().tag("query str").log(req.query);
        sz.cb = cb;
        let dateNow = sz.dnow(true);

        (async () => {
            try {
                let Transaction = await Categories.beginTransaction('READ COMMITTED');
                sz.Transaction = Transaction;
                console.time().file().tag('Transaction').log(Transaction);
                let ts = {transaction: Transaction};
                let res = await sz.fnModelCreate(body, Categories, ts);
                await Transaction.commit();
                sz._20000(res);
            } catch (err) {

                sz._50000(err);
            }
        })();
    };


    Categories.rmCategoryUpdate = function (body, category_id, cb) {
        console.file().time().tag("body").log(body);
        sz.cb = cb;
        let dateNow = sz.dnow(true);
        (async () => {
            try {
                let oldCategory = await sz.fnFindById(category_id, Categories);
                await sz.fnDataNotFound(oldCategory, 'ไม่พบข้อมูล Category');

                let Transaction = await Categories.beginTransaction('READ COMMITTED');
                sz.Transaction = Transaction;
                console.time().file().tag('Transaction').log(Transaction);
                let ts = {transaction: Transaction};

                let res = await sz.fnModelUpdate(category_id, body, Categories, ts);
                await Transaction.commit();
                sz._20000(res);
            } catch (err) {

                sz._50000(err);
            }
        })();
    };

    Categories.rmCategoryDelete = function (body, req, category_id, cb) {
        console.file().time().tag("body").log(body);
        console.file().time().tag("query str").log(req.query);
        console.file().time().tag("category_id").log(category_id);
        sz.cb = cb;

        (async () => {
            try {
                let oldCategory = await sz.fnFindById(category_id, Categories);
                await sz.fnDataNotFound(oldCategory, 'ไม่พบข้อมูล Category');

                const Transaction = await Categories.beginTransaction('READ COMMITTED');
                sz.Transaction = Transaction;
                console.time().file().tag('Transaction').log(Transaction);
                const ts = {transaction: Transaction};
                let res = await sz.fnMarkDelete(category_id, Categories, ts);
                await Transaction.commit();
                sz._20000(res);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };


    Categories.rmCategoryFindByID = function (req, category_id, cb) {
        sz.cb = cb;
        console.file().time().tag("query str").log(req.query);

        (async () => {
            try {
                let data = await sz.fnFindById(category_id, Categories);
                data = Categories.fnSetPathImgThumb(data, 'image_icon');
                sz._20000(data);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };


    Categories.rmCategoryGetProduct = function (req, category_id, cb) {
        sz.cb = cb;
        console.file().time().tag("query str").log(req.query);

        (async () => {
            try {
                let limit = req.query.limit;
                let page = req.query.page;
                let filter = {
                    limit: limit,
                    skip: page * limit,
                    where: {
                        deleted_at: null,
                        category_id: category_id,
                        enabled: true,
                    }
                };
                let data = await app.models.Products.find(filter);

                for (let i in data) {
                    data[i] = app.models.Products.fnSetPathImgThumb(data[i], 'logo_path');
                    data[i] = app.models.Products.fnBuildProductPrice(data[i]);
                }
                // let sql = 'select * from products where deleted_at is null and enabled is true ';
                // sql += ' and category_id=' + category_id;
                // sql += ' limit ' + page + ', ' + limit;
                //
                // let data = await sz.fnSqlQuery(sql, app.models.Products, false);

                sz._20000(data);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Categories.remoteMethod('rmFindCategory', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/find', verb: 'get'}
    });

    Categories.remoteMethod('rmFindCategoryMain', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/cat-main', verb: 'get'}
    });

    Categories.remoteMethod('rmFindCategorySub', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/cat-sub', verb: 'get'}
    });

    Categories.remoteMethod('rmFindCategoryGroup', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/cat-group', verb: 'get'}
    });

    Categories.remoteMethod('rmCategoryCreate', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'req', type: 'object', http: {source: 'req'}},
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/', verb: 'post'}
    });

    Categories.remoteMethod('rmCategoryUpdate', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'category_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:category_id', verb: 'put'}
    });

    Categories.remoteMethod('rmCategoryDelete', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'req', type: 'object', http: {source: 'req'}},
            {arg: 'category_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:category_id', verb: 'delete'}
    });

    Categories.remoteMethod('rmCategoryFindByID', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}},
            {arg: 'category_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:category_id', verb: 'get'}
    });

    Categories.remoteMethod('rmCategoryGetProduct', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}},
            {arg: 'category_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:category_id/get-product', verb: 'get'}
    });
};
