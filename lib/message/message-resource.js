
var messageRepository = require('./message-repository');
var userRepo = require('./../user/user-repository');

var get = function(req, res) {

	var id = parseInt(req.params.id) || -1;

  messageRepository.single(id, function(message) {

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