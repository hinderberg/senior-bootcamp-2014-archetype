var appConfig = require('./app-config')();
var request = require('request');

exports.get = function(url, callback) {
  request.get(appConfig.api.url + url, {
    auth: {
      user: appConfig.api.username,
      pass: appConfig.api.password,
      sendImmediately: false
    },
    json: true
  }, callback);
};