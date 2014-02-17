var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'templates'));
var ListingServicesClient = require('./ListingServicesClient.js');

var listingServicesClient = new ListingServicesClient();

app.get('/listing/:id?', function (req, res) {
  var templateData = {};
  
  listingServicesClient.getDetails(req.params.id || 73734082, function (err, data) {
    templateData.listingDetails = data;
    res.render('index.jade', templateData);
  });
});

app.listen(3000);
console.log('Listening on port 3000');