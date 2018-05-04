// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

var dsConfig = require('../datasources.json');
var path = require('path');
var fs = fs || require('fs');

module.exports = function (app) {
    var User = app.models.user;

    //show password reset form
    app.get('/reset-password', function (req, res, next) {
        if (!req.query.accessToken) {
            return res.sendStatus(401);
        }
        let lang = req.query.lang === 'en' ? 'en' : 'th';
        let title = 'เปลี่ยนรหัสผ่าน';
        let path = 'password-reset/th.ejs';
        if (lang === 'en') {
            title = 'Change Password';
            path = 'password-reset/en.ejs';
        }
        // path = fs.readFileSync(__dirname + '/../../common/assets/views/' + path, 'UTF-8');
        res.render(__dirname + '/../../common/assets/views/' + path, {
            title: title,
            redirectUrl: '/api/Scusers/submit-reset-password?accessToken=' + req.query.accessToken +
                '&lang=' + lang
        });
    });
};