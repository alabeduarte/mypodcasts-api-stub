var express = require('express');
var app = express();

var fs = require("fs");

var fromFile = function(fileName) {
  return fs.readFileSync(__dirname + fileName, 'utf-8');
};

var jsonParse = function(file) {
  return JSON.parse(file);
};

app.get('/api/user/johndoe/latest_episodes', function(req, res) {
  var json = jsonParse(fromFile('/latest_episodes.json'));

  res.json(json);
});

app.get('/api/user/johndoe/feeds', function(req, res) {
  var json = jsonParse(fromFile('/user_feeds.json'));

  res.json(json);
});

app.get('/api/feeds/:id', function(req, res) {
  var json = jsonParse(fromFile('/feed.json'));

  res.json(json);
});

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
