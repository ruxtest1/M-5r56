'use strict';

let config = require('../../server/config.json');
let path = require('path');
let fs = require('fs')
let app = require('../../server/server');
let console = process.console;
const fnSz = require('../lib/sz');
let sz = new fnSz.fnSz();

module.exports = function (Products) {
    Products.disableRemoteMethodByName('patchOrCreate');
    Products.disableRemoteMethodByName('replaceOrCreate');
    Products.disableRemoteMethodByName('create');
    Products.disableRemoteMethodByName('createChangeStream');
    Products.disableRemoteMethodByName('find');
    Products.disableRemoteMethodByName('findById');
    Products.disableRemoteMethodByName('findOne');
    Products.disableRemoteMethodByName('prototype.patchAttributes');
    Products.disableRemoteMethodByName('exists_head');
    Products.disableRemoteMethodByName('replaceById');
    Products.disableRemoteMethodByName('exists');
    Products.disableRemoteMethodByName('deleteById');
    Products.disableRemoteMethodByName('upsertWithWhere');
    Products.disableRemoteMethodByName('updateAll');
    Products.disableRemoteMethodByName('count');

    Products.pathFolderProduct = 'uploads/products/';

    /*
    เช็คว่า path รูปเดิม มี thumbnail ไหม
     */
    Products.fnSetPathImgThumb = (data, key) => {
        if (sz.checkData(data[key])) {
            let path = app.models.Container.url_google_file + data[key];
            // path = Products.fnCheckImagePath(path);
            data[key] = path;
            let pathThumb = null;
            if (path) {
                // pathThumb = Products.fnCheckImagePath(sz.fnGetPathImgThumb(path))
                pathThumb = sz.fnGetPathImgThumb(path);
            }
            data[key + '_thumbnail'] = pathThumb;
        }
        return data;
    };

    Products.rmFindProduct = (req, cb) => {
        sz.cb = cb;

        (async () => {
            try {
                let filters = {
                    model: Products,
                    ts: null,
                    query: req.query,
                    and: null,
                };
                filters.query.order = filters.query.order || ' name_th';
                let res = await sz.fnModelFindPaging(filters);
                sz._20000(res);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Products.rmProductCreate = function (body, req, cb) {
        console.file().time().tag("body").log(body);
        console.file().time().tag("query str").log(req.query);
        sz.cb = cb;
        let dateNow = sz.dnow(true);

        (async () => {
            try {
                let Transaction = await Products.beginTransaction('READ COMMITTED');
                sz.Transaction = Transaction;
                console.time().file().tag('Transaction').log(Transaction);
                let ts = {transaction: Transaction};
                body.image_gallery_path = sz.fnJson2Str(body.image_gallery_path);
                let res = await sz.fnModelCreate(body, Products, ts);
                await Transaction.commit();
                sz._20000(res);
            } catch (err) {

                sz._50000(err);
            }
        })();
    };

    Products.rmProductClone = function (body, req, cb) {
        console.file().time().tag("body").log(body);
        console.file().time().tag("query str").log(req.query);
        sz.cb = cb;
        let dateNow = sz.dnow(true);

        (async () => {
            try {
                let MapProductAttributes = app.models.MapProductAttributes,
                    MapAttributes = app.models.MapAttributes, multiFn = [
                        sz.fnFindById(body.product_id, Products),
                        sz.fnModelFind({product_id: body.product_id}, MapProductAttributes)
                    ];

                let values = await sz.fnPromiseAll(multiFn);
                await sz.fnDataNotFound(values[0], 'ไม่พบข้อมูล สินค้า');

                let Transaction = await Products.beginTransaction('READ COMMITTED');
                sz.Transaction = Transaction;
                console.time().file().tag('Transaction').log(Transaction);
                let ts = {transaction: Transaction};

                // body.image_gallery_path = sz.fnJson2Str(body.image_gallery_path);
                let productOldData = values[0];
                productOldData.logo_path = null;
                productOldData.image_gallery_path = [];
                let res = await sz.fnModelCreate(productOldData, Products, ts);
                let new_id = res.id;
                if (sz.checkData(values[1])) {
                    for (let i in values[1]) {
                        let rowI = values[1][i];
                        let mapAttributes = await sz.fnModelFind({map_product_id: rowI.id}, MapAttributes);
                        rowI.product_id = new_id;
                        let mapProductAttribute = await sz.fnModelCreate(rowI, MapProductAttributes, ts);
                        for (let j in mapAttributes) {
                            let rowJ = mapAttributes[j];
                            rowJ.map_product_id = mapProductAttribute.id;
                            let mapAttribute = await sz.fnModelCreate(rowJ, MapAttributes, ts);
                        }
                    }
                }
                await Transaction.commit();
                sz._20000(res);
            } catch (err) {

                sz._50000(err);
            }
        })();
    };


    Products.rmProductUpdate = function (body, product_id, cb) {
        console.file().time().tag("body").log(body);
        sz.cb = cb;
        let dateNow = sz.dnow(true);
        (async () => {
            try {
                let oldProduct = await sz.fnFindById(product_id, Products);
                await sz.fnDataNotFound(oldProduct, 'ไม่พบข้อมูล Product');

                let Transaction = await Products.beginTransaction('READ COMMITTED');
                sz.Transaction = Transaction;
                console.time().file().tag('Transaction').log(Transaction);
                let ts = {transaction: Transaction};

                body.image_gallery_path = sz.fnJson2Str(body.image_gallery_path);
                let res = await sz.fnModelUpdate(product_id, body, Products, ts);
                await Transaction.commit();

                //เช็คเพื่อลบรูป from google
                await app.models.Container.fnCheckDeleteFileGoogle(body.delete_file || null);

                sz._20000(res);
            } catch (err) {

                sz._50000(err);
            }
        })();
    };

    Products.rmProductDelete = function (body, req, product_id, cb) {
        console.file().time().tag("body").log(body);
        console.file().time().tag("query str").log(req.query);
        console.file().time().tag("product_id").log(product_id);
        sz.cb = cb;

        (async () => {
            try {
                let oldProduct = await sz.fnFindById(product_id, Products);
                await sz.fnDataNotFound(oldProduct, 'ไม่พบข้อมูล Product');

                const Transaction = await Products.beginTransaction('READ COMMITTED');
                sz.Transaction = Transaction;
                console.time().file().tag('Transaction').log(Transaction);
                const ts = {transaction: Transaction};
                let res = await sz.fnMarkDelete(product_id, Products, ts);
                await Transaction.commit();
                sz._20000(res);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Products.fnFindProductID = async (product_id) => {
        let data = await sz.fnSqlQuery('select * from products where deleted_at is null and id=' + product_id,
            Products, false, true);
        if (sz.checkData(data)) {
            // data = sz.fnConvertArrayShortDate(data, ['created_at']);
            // data = sz.fnDeleteKey(data, ['updated_at', 'deleted_at']);
            // data = Products.fnSetPathImgThumb(data, 'logo_path');

            data.image_gallery_path = sz.fnStr2Json(data.image_gallery_path);
            // if (sz.checkData(data.image_gallery_path)) {
            //     let newGallery = [];
            //     for (let i in data.image_gallery_path) {
            //         let rowI = data.image_gallery_path[i];
            //         rowI = Products.fnSetPathImgThumb(rowI, 'path');
            //         if (rowI.path) {
            //             newGallery.push(rowI)
            //         }
            //     }
            //     data.image_gallery_path = newGallery;
            // } else {
            //     data.image_gallery_path = [];
            // }

            //get attribute
            let mapProductAttributeModel = app.models.MapProductAttributes,
                mapAttributeModel = app.models.MapAttributes,
                attributeModel = app.models.Attributes;
            let mapProductAttributes = await mapProductAttributeModel.fnGetMapProductAttribute(data.id);
            let multiFn = [];
            for (let i in mapProductAttributes) {
                let rowI = mapProductAttributes[i];
                multiFn.push(mapAttributeModel.fnGetMapAttribute(rowI.id));
            }
            let attributeGroup = [];
            if (multiFn.length) {
                let values = await sz.fnPromiseAll(multiFn);
                for (let i in mapProductAttributes) {
                    let rowI = mapProductAttributes[i];
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

                    rowI.map_attributes.forEach((val) => {
                        let attrData = {
                            attribute_id: val.attribute_id,
                            attribute_name_th: val.attribute_name_th,
                            attribute_name_en: val.attribute_name_en,
                            is_select: false,
                            value: val.value,
                        };
                        let filter = attributeGroup.filter((val2) => {
                            return val2.attribute_group_id === val.attribute_group_id
                        });
                        if (!sz.checkData(filter)) {
                            attributeGroup.push({
                                attribute_group_id: val.attribute_group_id,
                                group_name_en: val.group_name_en,
                                group_name_th: val.group_name_th,
                                type: val.type,
                                value: val.value,
                                value_type: val.value_type,
                                attribute: [attrData]
                            })
                        } else {
                            let attr = filter[0].attribute;
                            let filter2 = attr.filter((val2) => {
                                return val.attribute_id === val2.attribute_id
                            });
                            if (!sz.checkData(filter2)) {
                                attr.push(attrData);
                            }
                        }
                    })
                }
            }
            data.attribute_group = attributeGroup;
            data.attributes = mapProductAttributes;
        }
        return data;
    };

    Products.fnCheckImagePath = (path) => {
        let pathImg = Products.pathFolderProduct;
        if (path) {
            let expImg = path.split('/');
            let strPath = pathImg + expImg[expImg.length - 1];
            return sz.fnCheckFileExists(strPath) ? path : null;
        }
        return null;
    };

    Products.fnProductPrice = (data) => {
        const userData = app.userData;
        const fnLoopCheckPrice = (star) => {
            for (let i = star; i > 0; i--) {
                if (data['price_star' + star] > 0) {
                    return data['price_star' + star];
                }
            }
            return data.price1;
        };
        if (sz.checkData(userData.vendor)) {
            switch (userData.vendor.star) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    return fnLoopCheckPrice(userData.vendor.star);
                default:
                    return data.price1;
            }
        } else {
            return data.price1;
        }
    };

    Products.fnBuildProductPrice = (val) => {
        const userData = app.userData;
        if (sz.checkData(userData)) {
            val.sale_price = null;
            if (userData.vendor) {
                val.sale_price = Products.fnProductPrice(userData.vendor.star);
            }
            val.price = val.price1;
            return sz.fnDeleteKey(val, ['price_star1', 'price_star2', 'price_star3', 'price_star4', 'price_star5'])
        } else {
            val.sale_price = null;
            val.price = val.price1;
            return sz.fnDeleteKey(val, ['price1', 'price2', 'price_star1', 'price_star2', 'price_star3', 'price_star4', 'price_star5'])
        }
    };

    Products.rmProductSearch = function (req, cb) {
        sz.cb = cb;
        console.file().time().tag("query str").log(req.query);

        (async () => {
            try {
                let filters = {
                    model: Products,
                    ts: null,
                    query: req.query,
                    and: null,
                };
                filters.query.order = filters.query.order || ' name_th';
                let data = await sz.fnModelFindPaging(filters);
                for (let i in data.rows) {
                    let val = data.rows[i];
                    // val = Products.fnSetPathImgThumb(val, 'logo_path');
                    val = Products.fnBuildProductPrice(val);
                    data.rows[i] = val;
                }
                sz._20000(data);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Products.rmProductFindByID = function (req, product_id, cb) {
        sz.cb = cb;
        console.file().time().tag("query str").log(req.query);

        (async () => {
            try {
                let data = await Products.fnFindProductID(product_id);
                sz._20000(data);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };

    Products.rmBuyProductFindByID = function (req, product_id, cb) {
        sz.cb = cb;
        console.file().time().tag("query str").log(req.query);

        (async () => {
            try {
                let data = await Products.fnFindProductID(product_id);
                data = Products.fnBuildProductPrice(data);
                sz._20000(data);
            } catch (err) {
                sz._50000(err);
            }
        })();
    };
    Products.remoteMethod('rmFindProduct', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/find', verb: 'get'}
    });

    Products.remoteMethod('rmProductCreate', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'req', type: 'object', http: {source: 'req'}},
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/', verb: 'post'}
    });

    Products.remoteMethod('rmProductClone', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'req', type: 'object', http: {source: 'req'}},
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/clone', verb: 'post'}
    });

    Products.remoteMethod('rmProductUpdate', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'product_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:product_id', verb: 'put'}
    });

    Products.remoteMethod('rmProductDelete', {
        accepts: [
            {arg: 'body', type: 'object', http: {source: 'body'}},
            {arg: 'req', type: 'object', http: {source: 'req'}},
            {arg: 'product_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:product_id', verb: 'delete'}
    });

    Products.remoteMethod('rmProductFindByID', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}},
            {arg: 'product_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:product_id', verb: 'get'}
    });

    Products.remoteMethod('rmBuyProductFindByID', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}},
            {arg: 'product_id', type: 'string', required: true}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/:product_id/buy', verb: 'get'}
    });

    Products.remoteMethod('rmProductSearch', {
        accepts: [
            {arg: 'req', type: 'object', http: {source: 'req'}}
        ],
        returns: {arg: 'return', type: 'object', root: true},
        http: {path: '/search', verb: 'get'}
    });
};
