var messageResource = require('./lib/message/message-resource');
var messageView = require('./lib/message/message-view');

exports.setup = function(server) {

	server.get('/', messageView.messages);
	server.get('/message/:id', messageResource.get);
	server.get('/messages', messageResource.list);
    
};