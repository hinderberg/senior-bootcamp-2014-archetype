var employee = require('./../employee');

exports.get = function(id, callback) {

	employee.get('employee/' + id, function(err, response, body) {

		if (err || response.statusCode != 200) {
	    	callback();
	    	return;
	    }
	    callback(body[0]);
	});

};