var socialcast = require('./lib/socialcast');

var list = function(callback) {

  socialcast.get('messages',

	function (error, response, body) {
	    if (error || response.statusCode != 200) {
	    	callback([]);
	    	return;
	    }
	    callback(body);
	});
};

exports.list = list;