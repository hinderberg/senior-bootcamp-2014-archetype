
var messageRepository = require('./message-repository');


var get = function(req, res) {

	var id = parseInt(req.params.id) || -1;

	var message = {
		message_id : id
	};

	res.json(message);

}

var list = function(req, res) {

	messageRepository.list(function(messages) {
		res.json(messages);
	});

}

exports.get = get;
exports.list = list;