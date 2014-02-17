var http = require('http');
var querystring = require('querystring');
var ServicesClient = require('./ServicesClient.js');

var listingServicesClient = function ListingServicesClient () {
  var client = new ServicesClient();
  
  this.getDetails = function (id, callback) {
    return client.call('listingServices', 'details', {id:id}, callback);
  }
  
  this.search = function (parameters, callback) {
    return client.call('listingServices', 'search', parameters, callback);
  }
};
module.exports = listingServicesClient;