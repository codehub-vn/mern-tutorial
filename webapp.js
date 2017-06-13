var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var app = express();
var db;

app.use(express.static('static'));

/* Trả về danh sách các record đã được filter */
app.get('/api/bugs', function(req, res) {
  console.log("Query string", req.query);
  var filter = {};
  if (req.query.priority)
    filter.priority = req.query.priority;
  if (req.query.status)
    filter.status = req.query.status;

  db.collection("bugs").find(filter).toArray(function(err, docs) {
    res.json(docs);
  });
});

app.use(bodyParser.json());

/* Thêm record vào DB */
app.post('/api/bugs/', function(req, res) {
  console.log("Req body:", req.body);
  var newBug = req.body;
  db.collection("bugs").insertOne(newBug, function(err, result) {
    var newId = result.insertedId;
    db.collection("bugs").find({_id: newId}).next(function(err, doc) {
      res.json(doc);
    });
  });
});

/* Lấy về data của một record */
app.get('/api/bugs/:id', function(req, res) {
  db.collection("bugs").findOne({_id: ObjectId(req.params.id)}, function(err, bug) {
    res.json(bug);
  });
});

MongoClient.connect('mongodb://localhost/bugsdb', function(err, dbConnection) {
  db = dbConnection;
  var server = app.listen(3000, function() {
	  var port = server.address().port;
	  console.log("Started server at port", port);
  });
});
