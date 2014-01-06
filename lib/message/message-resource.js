
var messageRepository = require('./message-repository');

var get = function(req, res) {

  if (isNaN(req.params.id)) {
    res.send(400);
  }

  messageRepository.single(req.params.id, function(message) {

    if (!message) {
      res.send(404);
    }

    res.json(message);
  });

};

var list = function(req, res) {

	messageRepository.list(function(messages) {
		res.json(messages);
	});

};

exports.get = get;
exports.list = list;