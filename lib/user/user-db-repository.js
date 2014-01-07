
var db = require('./../db');

var employeesKey = 'employee';

exports.insert = function(employee, callback) {
    var userCollection = db.getCollection(employeesKey);
    userCollection.insert(employee, function(err, result) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, result);
    });
};

exports.get = function(userId, callback) {
    var userCollection = db.getCollection(employeesKey);
    userCollection.findOne({ Id : userId }, callback);
}

exports.list = function(callback) {
    var userCollection = db.getCollection(employeesKey);
    var cursor = userCollection.find();
    var result = [];
	
	userCollection.find().toArray(function(err, employees) {
		callback(employees);
  	});
    
};