var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/client/index.html');
});

app.post('/logar',function(req,res){

});

app.use('/client',express.static(__dirname + '/client'));

serv.listen(8080);