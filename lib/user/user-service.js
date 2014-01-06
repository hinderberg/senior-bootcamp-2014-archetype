var userRepository = require('./user-repository');
var _ = require('underscore');

var matchName = function(userList, userName, callback) {

  var user = _.find(userList, function(employee) {
    var matches = _.intersection(userName.split(" "), employee.Name.split(" "));
    return matches.length >= 2;
  });


  return callback(user.Id);

};



exports.findByName = function(userName, callback) {
    userRepository.list(function(list) {
        matchName(list, userName, function(id) {
            userRepository.get(id, callback);
        })

    })
};

exports.get = function(userId, callback) {
    userRepository.get(userId, callback);
};