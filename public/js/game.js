var socket = io();

socket.on('log', function(msg){
  console.log("Server Log: " + msg);
  // Print log on screen
})

console.log('hello world!');
