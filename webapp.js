var express = require('express')

var app = express();

app.use(express.static('static'));

var bugData = [
  {id: 1, priority: 'P1', status:'Open', owner:'Jessica Bánh Bèo', title:'Jessica Bánh Bèo'},
  {id: 2, priority: 'P2', status:'New', owner:'Eddie Tí Tèo', title:'Thiếu canh lề CSS cho văn bản trong table'},
];

app.get('/api/bugs', function(req, res) {
  res.status(200).send(JSON.stringify(bugData));
});

var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log("Started server at port", port);
});
