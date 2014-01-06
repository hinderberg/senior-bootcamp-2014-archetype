
var express = require('express');
var request = require('request');
var app = express();

var routing = require('./routing');
var appConfig = require('./lib/app-config')();

routing.setup(app);

app.listen(appConfig.port);
console.log('Listening on port: ' + appConfig.port);
