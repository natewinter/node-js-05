const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const eventEmitter = require('events');
class Emitter extends eventEmitter {}
//initalize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  const extenstion = path.extname(req.url);
  let contentType;
});
//LISTEN FOR REQUESTS ALWAYS AT THE END OF SERVER.JS FILE
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//add listener for the log event
// myEmitter.on('log', (msg) => logEvents(msg));
//Emit event
// myEmitter.emit('log', 'Log event emitted!');
