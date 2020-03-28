var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

// Our packages
var utilities = require('./libs/utilities.js');
var game = require('./libs/game.js');
game.test();

var players = {};

// Automatically (statically) give any files requested in public
app.use(express.static(__dirname + '/public'));

// On connecting to server, give index.html to client
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Event: new connection
io.on('connection', function (socket) {
  utilities.log('a user connected');

  // create a new player and add it to our players object
  players[socket.id] = {
    name: 'fred'
  };

  socket.on('disconnect', function () {
    console.log('user disconnected');

    // remove this player from our players object
    delete players[socket.id];
    // emit a message to all players to remove this player
    io.emit('disconnect', socket.id);
  });
});

// Listen on port 8081
server.listen(8081, function () {
  console.log(`Listening on ${server.address().port}`);
});