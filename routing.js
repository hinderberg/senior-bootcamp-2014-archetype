



var messageResource = require('./message-resource');


exports.setup = function(server) {


	server.get('/message/:id', messageResource.get);

}