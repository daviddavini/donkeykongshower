/*
* Log server messages
*/
exports.log = function(msg) {
  console.log(msg);
  io.emit('log', msg);
}