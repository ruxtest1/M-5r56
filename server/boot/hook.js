/**
 * Created by Rux-PC on 11/3/2560.
 */
'use strict';

var app = require('../..');
var console = process.console;
const fnSz = require('../../common/lib/sz');
const moment = require('moment');
let sz = new fnSz.fnSz(app);

module.exports = function (app) {
    let remotes = app.remotes();
    // modify all returned values
    remotes.before('**', async function (ctx, next) {
        let req = ctx.req;

        console.log('lang=' + req.query.lang)
        try {
            app.accessToken = req.accessToken.id;
            let lang = req.query.lang || 'th';
            if (lang === 'en') {
                app.lang = 'en';
                app.resMsg = require('../../common/message/en.json');
            }
            if (sz.checkData(req.accessToken.userId)) {
                let userData = await sz.fnFindById(req.accessToken.userId, sz.userModel);
                let vendor = await sz.fnFindOne({user_id: req.accessToken.userId}, app.models.Vendors);
                userData.vendor = null;
                if (sz.checkData(vendor)) {
                    userData.vendor = vendor;
                }
                app.userData = userData;
            }
        } catch (err) {
        }
        return new Promise(function (resolve, reject) {
            // if (sz.checkData(access_token)) {
            //   sz.userModel.findByAccessToken(access_token, async function (err, user) {
            //     if (err) {
            //       next(err);
            //     }
            //     try {
            //       if (sz.checkData(user)) {
            //         let roles = await sz.userModel.fnFindRoleByUserID(user.id, true);
            //         user.role = roles;
            //         app.accountID = user.account_id;
            //       }
            //       app.userData = user;
            //       next();
            //     } catch (err) {
            //       next(err);
            //     }
            //   });
            // } else {
            // }
            next();
        });
    });

    remotes.after('**', function (ctx, next) {
        //ctx.result = {
        //    resultCode: 20000,
        //    resultDescription: 'System Success',
        //    data: ctx.result
        //};
        // console.log('rux')
        next();
    });
};
