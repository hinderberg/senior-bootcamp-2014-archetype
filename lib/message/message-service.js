var messageRepository = require('./message-repository');
var userService = require('./../user/user-service');

exports.single = function(id, callback) {

    messageRepository.single(id, function(message) {
        userService.findByName(message.user.name, function(user) {


            if(user)
            {
                message.user.seniority = user.Seniority;
            }

            callback(message);
        })
    });

}

exports.list = function(callback) {
    messageRepository.list(callback);

}
