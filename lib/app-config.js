
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

  return {
    socialcast_api: {
      url: env.API_URL,
      username: env.API_USERNAME,
      password: env.API_PASSWORD
    },
    employee_api: {
      url: env.API_EMPLOYEE_URL
    },
    port: env.PORT || 1339
  };

};



