var messageRepository = require('./message-repository');
//var userRepository = require('./user-repository');

exports.single = function(id, callback) {

    var singleMessage = messageRepository.single(id, function(message) {
/*        var userId = message.user.id;
        var user = userRepository.get(userId);
        var userTitle = user.Title;
        message.user.title = userTitle;
*/      message.user.titleman = "TEST";
        callback(message);
    });

}
