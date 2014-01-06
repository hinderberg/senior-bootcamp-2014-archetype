
var messageService = require('./message-service');

exports.messages = function (req, res) {

  messageService.list(function(messages) {

    res.render('layout', {
      title: 'Meldinger',
      messages: messages,
      partials: { content: '_messages' }
    });

  });

};