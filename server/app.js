var express = require('express'),
    http = require('http');

var app = express(),
    server = http.Server(app),
    io = require('socket.io').listen(server);

app.use(express.static('build'));

server.listen(3000, function () {
  console.log('listening on *:3000');
});

io.on('connection', function (socket) {

  socket.on('message:send', function (message) {
    socket.broadcast.emit('message:send', message);
  });
});
