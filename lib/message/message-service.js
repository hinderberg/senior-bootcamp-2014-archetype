var messageRepository = require('./message-repository');
var userRepository = require('./../user/user-repository');
var async = require('async');

exports.single = function(id, callback) {

    messageRepository.single(id, function(err, message) {
 /*       var userId = message.user.id;
        userRepository.get(userId, function(user) {
            var userTitle = user.Title;
            message.user.title = userTitle;
  */
      getLike(message, callback);


   //     });

    });

}

//todo single skal ha likes

exports.list = function(callback) {

  messageRepository.list(function(err, messages) {

    if (err) {
      callback(err)
    }

    getLikes(messages, callback);
  });

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