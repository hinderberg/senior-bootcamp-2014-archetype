
var messageRepository = require('./message-repository');

exports.messages = function (req, res) {

  messageRepository.list(function(messages) {

    res.render('layout', {
      title: 'Meldinger',
      messages: messages,
      partials: { content: '_messages' }
    });

  });

};