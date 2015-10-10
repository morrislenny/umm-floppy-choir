'use strict';


// Grab important stuff from the environment:

var ARDUINO = process.env.ARDUINO;
var PORT = process.env.PORT || 3000;


// Connect the controller to the device:

var floppy = require('./lib/floppy');

var controller = floppy(ARDUINO);


// Start the web interface and handle events:

var express = require('express'),
    http = require('http'),
    socket = require('socket.io');

var app = express(),
    server = http.Server(app),
    io = socket(server);

app.use(express.static('public'));

server.listen(PORT, function() {
  console.info('Server listening on port %d.', PORT);
});
