var http = require('http');
var querystring = require('querystring');

 var servicesClient = function ServicesClient () {
  var baseUrl = 'http://api.int.homefinder.com/'
    
  this.call = function (service, method, parameters, callback) {
    var buffer = '';
    
    http.get(baseUrl + service + '/' + method + '?' + querystring.stringify(parameters), function (res) {
      res.setEncoding('utf8');
      res.on('data', function (data) {
        buffer += data;
      });
      res.on('end', function () {
        callback(null, JSON.parse(buffer).data);
      })
    });
    
  }
};
module.exports = servicesClient;
