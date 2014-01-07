var messageService = require('./message-service');

exports.get = function(req, res) {

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

exports.list = function(req, res) {

	messageService.list(function(err, messages) {
		res.json(messages);
	});

};


exports.insert = function(req, res) {
    var message = req.body;
    messageService.insert(message, function(err, messages) {
        if(err) {
            res.send(500, err);
            return;
        }
        else {
            res.send(200, messages[0]);
        }
    });
    
};