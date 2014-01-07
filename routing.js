var messageResource = require('./lib/message/message-resource');
var messageView = require('./lib/message/message-view');
var graphsView = require('./lib/graphs/graphs-view');

exports.setup = function(server) {

	server.get('/', messageView.messages);
	server.get('/graphs', graphsView.graphs);
	server.get('/message/:id', messageResource.get);
	server.get('/messages', messageResource.list);
  server.post('/push', messageResource.insert);

};