var express = require('express');
var app = express();
var path = require('path');

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db;

app.set('view engine', 'html');

app.use('/index', express.static(path.join(path.resolve(), 'static')));
app.use(express.static('static'));

app.get('/', function (request, response) {
  response.render('index');
});

app.listen(3000, function () {
  console.log('The service is running!');
});
