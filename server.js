// Requires ---
var express = require('express');
var app = express();
var path = require('path');

var MongoClient = require('mongodb').MongoClient;
var db;
var ObjectID = require('mongodb').ObjectID;

var bodyParser = require('body-parser');

// var uuid = require('uuid-v4');
// var myUUID = uuid();

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
    db = client.db('databas');
  }
});

app.get('/userinfo', function(request, response) {
  db.collection('userInfo').find('_id').toArray(function(error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);
  });
});

app.get('/userinfo/:alias', function(request, response) {
  db.collection('userInfo').find({'userName': request.params.alias}).toArray(function(error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);
  });
});

app.post('/userinfo', function(request, response) {
  db.collection('userInfo').insert(request.body,
    function(error, result) {
      if (error) {
        response.status(500).send(error);
        return;
      }
      response.send(result);
    })
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
  db.collection('messages').insert(request.body,
    function(error, result) {
      if (error) {
        response.status(500).send(error);
        return;
      }
      response.send(result);
    })
});

app.post('/userinfo/:alias/update-friends',function (request, response) {
  db.collection('userInfo').update({'_id': new ObjectID(request.params.alias)},{$push: {friends: request.body}},
   function (error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);

  });
});
app.get('/userinfo/:alias/friends', function(request, response) {
  db.collection('userInfo').find({'_id': new ObjectID(request.params.alias)}).toArray(function(error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);
  });
});

app.post('/userinfo/:alias/get-added',function (request, response) {
  db.collection('userInfo').update({'_id': new ObjectID(request.params.alias)},{$push: {friends: request.body}},
   function (error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);

  });
});

// Direct chatt
app.post('/userinfo/:alias/conversations',function (request, response) {
  db.collection('userInfo').update({'_id': new ObjectID(request.params.alias)},{$push: {conversations: request.body}},{upsert: true},
   function (error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);

  });
});

app.post('/userinfo/:alias/conversations2',function (request, response) {
  db.collection('userInfo').update({'_id': new ObjectID(request.params.alias)},{$push: {conversations: request.body}},{upsert: true},
   function (error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);

  });
});

app.get('/con/:alias/conversations', function(request, response) {
  db.collection('userInfo').find({'_id': new ObjectID(request.params.alias)}).toArray(function(error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);
  });
});
