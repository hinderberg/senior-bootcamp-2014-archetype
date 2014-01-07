var socialcast = require('./../socialcast');
var cache = require('./../cache');

var messageLikesKey = "messages:likes";

var db = require('./../db');

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

  var cacheId = messageLikesKey + id;

  var likes = cache.get(cacheId);

  if(likes) {
    callback(null, likes);
    return;
  }

  socialcast.get('messages/'+ id + '/likes', function(error, response, body) {
    if (error || response.statusCode != 200) {
      callback(new Error('Could not get likes'));
      return;
    }

    if(body.statuscode === 500) {
      callback(new Error('Could not get likes'));
      return;
    }

    cache.set(cacheId, body, 60);

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

exports.test = function() {
  db.getCollection('test').insert({name: "doduck", description: "learn more than everyone"}, function(err, result) {
    if(err)
      throw err;

    console.log("entry saved");


    var cursor = db.getCollection('test').find({"name" : "doduck"});
    cursor.each(function(err, doc) {
      if(err)
        throw err;
      if(doc==null)
        return;

      console.log("document find:");
      console.log(doc.name);
    });


  });
};