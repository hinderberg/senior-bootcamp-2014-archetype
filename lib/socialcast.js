var appConfig = require('./app-config')();
var request = require('request');

exports.get = function(url, callback) {
  request.get(appConfig.socialcast_api.url + url, {
    auth: {
      user: appConfig.socialcast_api.username,
      pass: appConfig.socialcast_api.password,
      sendImmediately: false
    },
    json: true
  }, callback);
};