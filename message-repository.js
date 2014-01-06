var socialcast = require('./lib/socialcast');

exports.list = function(callback) {

  socialcast.get('messages', function (error, response, body) {
	    if (error || response.statusCode != 200) {
	    	callback([]);
	    	return;
	    }
	    callback(body);
	});
};

exports.single = function(id, callback) {
  socialcast.get('messages/'+ id, function(error, response, body) {
    if (error || response.statusCode != 200) {
      callback(undefined);
      return;
    }

    if(body.statuscode === 500) {
      callback(undefined);
      return;
    }

    callback(body);
  });
};