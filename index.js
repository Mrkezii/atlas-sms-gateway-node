var request = require('request');
var baseUrl = 'http://localhost:3030/v1/sms/send_sms';

function Atlas(api_key, api_secret) {
  if (!(api_key || api_secret)) {
    throw new Error('Provide both Atlas API_KEY and API_SECRET');
  }

  this.options = {
    auth: {
      user: api_key,
      pass: api_secret
    },
  }
}

var methods = {
  sendSMS(payload) {
    request.post({ url: baseUrl, form: payload, auth: this.options.auth }, function (error, response, payload) {
      console.log('statusCode:', response && response.statusCode);
      if (error) {
        return console.error('upload failed:', error);
      }
      console.log('Upload successful!  Server responded with:', payload);
    });
  }
}

Object.assign(Atlas.prototype, methods);
module.exports = Atlas;