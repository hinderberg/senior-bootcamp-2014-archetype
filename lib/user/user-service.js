var userRepository = require('./user-repository');
var userDbRepository = require('./user-db-repository');
var _ = require('underscore');
var async = require('async');

var matchName = function(userList, userName, callback) {

  var userNameArray = userName.split(" ");
  var user = _.find(userList, function(employee) {
    var matches = _.intersection(userNameArray, employee.Name.split(" "));
    return matches.length >= 2;
  });

  return callback(user.Id);
};




var getUser = function(id, callback) {

    userRepository.get(id, function(user){
        userDbRepository.insert(user, function() {
            callback(null, null);
        });
    });

};


exports.findByName = function(userName, callback) {
    userRepository.list(function(list) {
        matchName(list, userName, function(id) {
            userRepository.get(id, callback);
        });
    });
};

exports.get = function(userId, callback) {
    userRepository.get(userId, callback);
};

exports.insertToMongo = function(callback) {
    userRepository.list(function(list) {

        var tasks = [];

        list.forEach(function(user) {
            tasks.push(function(asyncCallback){

                getUser(user.Id, asyncCallback);

            });

        });

       async.parallel(tasks, function(err, resultsArray) {

            if (err) {
                callback(err);
            }

            callback(null, "done");

        });

    });
};
