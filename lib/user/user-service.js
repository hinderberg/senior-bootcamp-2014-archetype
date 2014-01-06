var userRepository = require('./user-repository');

var matchName = function(userList, userName, callback) {
    var splitName = userName.split(' ');
    var hits = [];
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].Name.split(' ')[0].match(splitName[0])){
            //console.log(userList[i].Name);
            hits.push(userList[i].Id);
        }
    }

    if (hits.length == 0){
        callback(-1);
        return;
    }
    callback(hits[0]);
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