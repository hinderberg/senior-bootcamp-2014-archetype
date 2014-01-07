
var db = require('./../db');

exports.single = function(id, callback) {
    
    var messageCollection = db.getCollection('messages');
    messageCollection.findOne({ id : id }, callback);

}

exports.insert = function(message, callback) {
    
    var messageCollection = db.getCollection('messages');
    
    messageCollection.insert(message, function(err, result) {
        
        if(err)
        {
            callback(err, null);
        }
        
        callback(null, result);
  });
};