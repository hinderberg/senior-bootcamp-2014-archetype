var _ = require('underscore');

exports.map = function (carData) {
    
    var getValue = function(key) {
        return _.find(carData, function(obj) {
            return obj.name == key;
        }).value;
    };
    
    return {
        regnr : getValue('Registreringsnummer'),
        modell: getValue('Merke og modell'),
        type : getValue('Merke og modell'),
        
    };
};