
var messageService = require('./message-service');


var get = function(req, res) {

  if (isNaN(req.params.id)) {
    res.send(400);
  }


  messageService.single(req.params.id, function(message) {

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