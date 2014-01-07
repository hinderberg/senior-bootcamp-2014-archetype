var car = require('./../car');

exports.get = function(regnr, callback) {
    
    car.get(regnr, function(err, carData) {
        
        console.log(carData);
        callback(null, carData);
        
    });
    
};