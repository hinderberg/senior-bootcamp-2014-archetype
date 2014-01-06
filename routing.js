



var messageResource = require('./message-resource');


exports.setup = function(server) {



	server.get('/', function(req, res) {
		res.send("Hello world. JA!");
	})
	server.get('/message/:id', messageResource.get);

}