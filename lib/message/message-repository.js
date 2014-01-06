var socialcast = require('./../socialcast');

exports.list = function(callback) {

  socialcast.get('messages', function (error, response, body) {
	    if (error || response.statusCode != 200) {
	    	callback(new Error('It failes'), null);
	    	return;
	    }
	    callback(null, body);
	});
};


exports.likes = function(id, callback) {

  socialcast.get('messages/'+ id + '/likes', function(error, response, body) {
    if (error || response.statusCode != 200) {
      callback(new Error('Could not get likes'), null);
      return;
    }

    if(body.statuscode === 500) {
      callback(new Error('Could not get likes'), null);
      return;
    }

    callback(null, body);
  });

};

exports.single = function(id, callback) {
  socialcast.get('messages/'+ id, function(error, response, body) {
    if (error || response.statusCode != 200) {
      callback(new Error('Could not get single message'));
      return;
    }

    if(body.statuscode === 500) {
      callback(new Error('Could not get single message'));
      return;
    }

    callback(null, body);
  });
};