var request = require('request');

var list = function(callback) {

	request.get({
		uri : 'http://socialcast.apiary.io/api/messages',
		json : true
	}, 

	function (error, response, body) {
	    if (error || response.statusCode != 200) {
	    	callback([]);
	    	return;
	    }
	    callback(body);
	});
}

exports.list = list;