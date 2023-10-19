const net = require('net');

const server = net.createServer((socket) => {});
server.on('connection', (socket) => {
  socket.write('HTTP/1.0 200 OK\r\n' + '\r\n');
  socket.write('Hello World!');
  socket.end((err) => {
    if (err) console.log(err);
  });
});

server.listen(4000, 'localhost', () => {
  console.log('Server listening on', server.address());
});
