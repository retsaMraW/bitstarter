var express = require('express');
var fs = require('fs');

var buf = fs.readFileSync('index.html', null, function (err, data) {
  if (err) throw err;
  console.log(data);
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World!');
//  response.send('Hello World 2!');
  response.send(buf.toString('utf8'), 0, buf.length);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
