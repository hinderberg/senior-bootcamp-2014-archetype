
var db = require('./../db');

exports.insert = function(employee, callback) {
    console.log(employee);
    var userCollection = db.getCollection('employee');
    userCollection.insert(employee, function(err, result) {
        if (err) {
            callback(err, null);
        }
        callback(null, result);

    });
};

exports.get = function(userId, callback) {
    var userCollection = db.getCollection('employee');
    userCollection.findOne({id:userId}, callback);
}