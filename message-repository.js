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

    var message = {
      message_id: body.id
    };

    callback(message);
  });
};