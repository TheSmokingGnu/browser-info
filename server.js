// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.send({
    ipaddress: request.headers['x-forwarded-for'].split(',')[0],
    language: request.acceptsLanguages()[0],
    software: request.headers['user-agent']
  })
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
