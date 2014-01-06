var matchName = function(userCache, userName, callback) {
    var splitName = userName.split(' ');
    var hits = [];
    for (var i = 0; i < userCache.length; i++) {
        if (userCache[i].name.split(' ')[0].match(splitname[0])){
            hits.push(userCache[i].id);
        }
    }

    if (hits.length == 1)
        callback(hits[0]);
    callback(-1);
};



exports.findByName = function(userName, callback) {

};