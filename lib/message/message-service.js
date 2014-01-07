var messageRepository = require('./message-repository');
var messageDbRepository = require('./message-db-repository');
var userService = require('./../user/user-service');
var async = require('async');

exports.single = function(id, callback) {
    
    
    messageDbRepository.single(id, function(err, message) {
        
        if(err) {
            getFromExternal(id, callback);
        }
        
        if(message) {
            callback(null, message);
        }
        else {
            getFromExternal(id, callback)
        }
        
    });
    
    var getFromExternal = function(id, callback) {
        
        messageRepository.single(id, function(err, message) {
        
            var tasks = [];
    
            tasks.push(function(callback) {
                getLike(message, callback)
            });
    
    
            tasks.push(function(callback) {
    
                userService.findByName(message.user.name, function(user) {
    
                    if(user)
                    {
                        message.user.senioritet = user.Seniority;
                        message.user.avdeling = user.Department;
                    }
    
                    callback(null, message);
                })
    
            });
    
            async.parallel(tasks, function(err, message) {
    
                if (err) {
                    callback(err);
                }
    
                callback(null, message[0]);
    
            });
    
        });
        
    }
    
    
}

//todo single skal ha likes

exports.list = function(callback) {

  messageRepository.list(function(err, messages) {

    if (err) {
      callback(err);
    }

    getLikes(messages, callback);
  });

};

exports.insert = function(message, callback) {
    
    messageDbRepository.insert(message, callback);
    
};


function getLikes(messages, callback) {

  var tasks = [];

  messages.forEach(function(message) {
    tasks.push(function(callback) {
      getLike(message, callback);
    });
  });

  async.parallel(tasks, function(err, likes) {
    if (err) {
      callback(new Error('Could not get likes'), null);
    }

    callback(null, messages);
  });

}

function getLike(message, callback) {
  messageRepository.likes(message.id, function(err, likes) {
    message.likes = likes;
    callback(err, message);
  });
}