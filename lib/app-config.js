
var config = {};

module.exports = function() {

  var env = process.env;

  if (!env) {
    throw new Error('I need environment variables');
  }

  if(!env.API_URL) {
    throw new Error('I need a API_URL');
  }

  if(!env.API_USERNAME) {
    throw new Error('I need a API_USERNAME');
  }

  if(!env.API_PASSWORD) {
    throw new Error('I need a API_PASSWORD');
  }

  if (!env.API_EMPLOYEE_URL) {
    throw new Error('I need a API_EMPLOYEE_URL');
  }

  if (!env.DB_URL) {
    throw new Error('I need a DB_URL');
  }
    
  if (!env.API_CAR_URL) {
    throw new Error('I need a API_CAR_URL');
  }

  return {
    socialcast_api: {
      url: env.API_URL,
      username: env.API_USERNAME,
      password: env.API_PASSWORD
    },
    employee_api: {
      url: env.API_EMPLOYEE_URL
    },
    port: env.PORT || 1339,
    db: {
      url: env.DB_URL
    },
      car_api: {
          url : env.API_CAR_URL
      }
  };

};



