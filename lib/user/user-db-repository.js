
var db = require('./../db');

exports.insert = function(employee, callback) {
    var userCollection = db.getCollection('employee');
    userCollection.insert(employee, function(err, result) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

exports.get = function(userId, callback) {
    var userCollection = db.getCollection('employee');
    userCollection.findOne({ Id : userId }, callback);
}