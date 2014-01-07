var userService = require('./user-service');
exports.get = function(req, res) {
  
    userService.getFromDb(req.params.id, function(err, user) {
        
        if(err || !user) {
            res.send(404);
            return;
        }
        
        res.json(user);
    });
};

exports.syncAll = function(req, res) {
    
      userService.insertToMongo(function(err, res){
          console.log('done inserting employees');
      });
    
    res.send(200, "Now syncing... Will finish when finished.");
    
};