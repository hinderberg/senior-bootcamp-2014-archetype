var appConfig = require('./app-config')();
var request = require('request');

exports.get = function(url, callback) {
  request.get(appConfig.employee_api.url + url, {
    auth: {
      user: appConfig.employee_api.username,
      pass: appConfig.employee_api.password,
      sendImmediately: false
    },
    json: true
  }, callback);
};