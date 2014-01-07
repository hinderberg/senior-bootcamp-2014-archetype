var chai = require("chai");
var expect = chai.expect;

var carRepository = require('./../lib/car/car-repository');

describe('car repo tests', function() {
    
    it('should get car info', function(done) {
        
        carRepository.get('dp28732', function(err, result)  {
            done();
        });
    });
});
