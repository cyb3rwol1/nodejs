var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var userId = 0;
io.on('connection', function(socket){
  socket.userId = userId ++;
  console.log('Um novo usuário conectado#' + socket.userId);

  socket.on('chat', function(msg){
    console.log('Mensagem do Usuário#' + socket.userId + ": " + msg);
    io.emit('chat', {
      id: socket.userId,
      msg: msg
    });
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});