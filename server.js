
var express = require('express');
var request = require('request');
var app = express();

var routing = require('./routing');

routing.setup(app);


var demo_url = "https://api.github.com/users/bekkopen/repos";
var mockServer = 'http://sbc2014.apiary.io';



// if on heroku use heroku port.
var port = process.env.PORT || 1339;
app.listen(port);
