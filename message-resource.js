




/* var temp = function('/', function(req, res) {
  request.get({
    url: demo_url,
    json: true,
    headers: {
            'User-Agent': 'request'
                }
    }, function(error, response, body) {
      if(error) {
          console.log("an error has occured. keep calm and carry on.");
      }
      res.json(body);
    });


}); */

var repository = require('./repository');


var get = function(req, res) {

	var id = parseInt(req.params.id) || -1;

	var message = {
		message_id : id
	};


	res.json(message);


	// 



}

exports.get = get;