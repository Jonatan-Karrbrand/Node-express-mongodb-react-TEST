// Requires ---
var express = require('express');
var app = express();
var path = require('path');

var MongoClient = require('mongodb').MongoClient;
var db;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
// Requires End ---

app.set('view engine', 'html');

app.use(express.static(path.join(path.resolve(), 'static')));

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(3000, function() {
  console.log('The service is running!');
});

// Anslutning till mongodb databas
MongoClient.connect('mongodb://localhost:27017', function(error, client) {
  if (error) {
    console.error("Failed to connect to server!");
    console.log(error);
  } else {
    console.log("Connected to server!");
    db = client.db('messages');
  }
});

app.get('/messages', function(request, response) {
  db.collection('messages').find('_id').toArray(function(error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);
  });
});

app.post('/messages', function(request, response) {
  db.collection('messages').insert(request.body),
    function(error, result) {
      if (error) {
        response.status(500).send(error);
        return;
      }
      response.send(result);
    }
});
