/*
* Log server messages
*/
function log(io, msg) {
  console.log(msg);
  io.emit('log', msg);
};

module.exports.log = log;