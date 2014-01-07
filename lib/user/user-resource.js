var userService = require('./user-service');
exports.get = function(req, res) {
  
    userService.get(req.params.id, function(err, user) {
        
        if(err || !user) {
            res.send(404);
            return;
        }
        
        res.json(user);
    });
};