var cache = {};

var get = exports.get = function (key) {

 var record = cache[key];

 if (!record) {
   return null;
 }

 var now = new Date();
 if (isNaN(record.expire) || record.expire >= now.getSeconds()) {
   return record.data;
 } else {
   del(key);
 }

 return null;

};

var set = exports.set = function (key, data, secondsToLive) {

 var record = {data: data};

 if (secondsToLive) {
   var now = new Date();
   now.setSeconds(now.getSeconds() + secondsToLive);
   record.expires = now.getTime();
 }

 cache[key] = record;

};

var del = exports.del = function (key) {
 delete get(key);
};

exports.clear = function () {
 cache = {};
};