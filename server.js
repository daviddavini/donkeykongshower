var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

// Our packages-
var utilities = require('./libs/utilities.js');
var rythm = require('./libs/rythm.js');

// Automatically (statically) give any files requested in public
app.use(express.static(__dirname + '/public'));

// On connecting to server, give index.html to client
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Event: new connection
io.on('connection', function (socket) {
  utilities.log(io, 'Socket connected: ' + socket.id);

  socket.on('disconnect', function () {
    utilities.log(io, 'Socket disconnected: ' + socket.id);
  });
});

// Listen on port 8081
server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
});