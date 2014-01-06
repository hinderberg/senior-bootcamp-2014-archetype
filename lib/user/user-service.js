var userRepository = require('./user-repository');

var matchName = function(userList, userName, callback) {
    var splitName = userName.split(' ');
    var hits = [];
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].name.split(' ')[0].match(splitname[0])){
            hits.push(userList[i].id);
        }
    }

    if (hits.length == 1)
        callback(hits[0]);
    callback(-1);
};



exports.findByName = function(userName, callback) {
    userRepository.list(function(list) {
        matchName(list, userName, function(id) {
            userRepository.get(id, callback);
        })

    })
};