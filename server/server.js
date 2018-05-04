// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-example-passport
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

var express = require('express');
var loopback = require('loopback');
var boot = require('loopback-boot');
var scribe = require('scribe-js')();
var app = module.exports = loopback();
// var random = require('randomstring');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');


app.use(scribe.express.logger()); //Log each request
app.use('/logs', scribe.webPanel());

var path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../common/assets/views'));
app.use(express.static(path.join(__dirname, '../common')));
// app.set('views', path.join(__dirname, 'views'));

app.start = function () {
    // start the web server
    return app.listen(function () {
        app.emit('started');
        var baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

app.lang = 'th';
app.resMsg = require('../common/message/th.json');
app.userData = null;
app.accountID = 0;
app.accessToken = null;

boot(app, __dirname, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
        app.start();
});
