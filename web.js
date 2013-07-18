var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var buf = fs.readFileSync(htmlfile, null, function (err, data) {
  if (err) throw err;
  console.log(data);
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World!');
//  response.send('Hello World 2!');
  response.send(buf.toString('utf8'), 0, buf.length);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
