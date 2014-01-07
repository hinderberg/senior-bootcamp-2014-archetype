var userService = require('./user-service');
exports.get = function(req, res) {
    
    var id = parseInt(req.params.id);
  
    userService.getFromDb(id, function(err, user) {
        
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

exports.list = function(req, res) {
    
    userService.list(function(employees) {
        res.json(employees);
    })
    
};