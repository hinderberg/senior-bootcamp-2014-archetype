var employee = require('./../employee');
var cache = require('./../cache');

var usersKey = "ansattliste:users";

exports.get = function(id, callback) {

	employee.get('employee/' + id, function(err, response, body) {

		if (err || response.statusCode != 200) {
	    	callback();
	    	return;
	    }
	    callback(body[0]);
	});



};


exports.list = function(callback) {

	employee.get('all', function(err, response, body) {

		if (err || response.statusCode != 200) {
	    	callback([]);
	    	return;
	    }
	    callback(body);
	});
};