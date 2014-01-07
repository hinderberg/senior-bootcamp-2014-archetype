var car = require('./../car');
var carMapper = require('./car-data-mapper');

exports.get = function(regnr, callback) {
    
    car.get(regnr, function (error, response, carData) {
        
        if (error || response.statusCode != 200) {
          callback(new Error('Could not get cars'));
          return;
        }
        
        if(carData.length == 0) {
            callback(null, null);
        }
        
        var car = carMapper.map(carData);
        
        callback(null, car);
        
    });
    
};