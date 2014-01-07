
var express = require('express');
var request = require('request');
var path = require('path');
var consolidate = require('consolidate');
var less = require('less-middleware');

var app = express();

var routing = require('./routing');
var appConfig = require('./lib/app-config')();

var db = require('./lib/db');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', consolidate.handlebars);
app.use(express.bodyParser());

routing.setup(app);

app.use(less({
  src: path.join(__dirname, 'public')
}));

app.use(express.static(path.join(__dirname, 'public')));


db.connect(appConfig.db, function(err) {

  if (err) {
    console.log(err);
  }

  console.log('Connected to ' + appConfig.db.url);

  app.listen(appConfig.port);
  console.log('Listening on port: ' + appConfig.port);

});



