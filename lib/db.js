var MongoClient = require('mongodb').MongoClient;

var db_connection;

exports.connect = function(options, callback) {

  MongoClient.connect(options.url, function(err, db) {

    if(err) {
      callback(err);
    }

    db_connection = db;
    callback();

  });

};

exports.getCollection = function(collection) {
  return db_connection.collection(collection);
};