var messageRepository = require('./message-repository');
var userRepository = require('./../user/user-repository');

exports.single = function(id, callback) {

    messageRepository.single(id, function(message) {
 /*       var userId = message.user.id;
        userRepository.get(userId, function(user) {
            var userTitle = user.Title;
            message.user.title = userTitle;
 */           callback(message);
   //     });

    });

}

exports.list = function(callback) {
    messageRepository.list(callback);

}
