var messageService = require('./message-service');

var get = function(req, res) {

  if (isNaN(req.params.id)) {
    res.send(400);
  }

  messageService.single(req.params.id, function(err, message) {

    if (err) {
      res.send(404);
      return;
    }

    res.json(message);

  });

};

var list = function(req, res) {

	messageService.list(function(err, messages) {
		res.json(messages);
	});

};

exports.get = get;
exports.list = list;