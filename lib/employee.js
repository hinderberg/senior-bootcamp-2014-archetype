var appConfig = require('./app-config')();
var request = require('request');

exports.get = function(url, callback) {
  request.get(appConfig.employee_api.url + url, {
    json: true
  }, callback);
};