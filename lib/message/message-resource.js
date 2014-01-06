
var messageService = require('./message-service');

var get = function(req, res) {

	var id = parseInt(req.params.id) || -1;

  messageService.single(id, function(message) {

    if (!message) {
      res.send(404);
    }

    res.json(message);
  });

};

var list = function(req, res) {



	messageService.list(function(messages) {
		res.json(messages);
	});

};

exports.get = get;
exports.list = list;