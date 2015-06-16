var express = require('express'),
    http = require('http');

var app = express();
var server = http.Server(app);

app.use(express.static('build'));

require('./routes')(app);

server.listen(3000, function () {
  console.log('listening on *:3000');
});
