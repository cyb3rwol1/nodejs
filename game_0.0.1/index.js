var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var userId = 0;
var startGame = '<div class="boxNovoJogador"><div class="titleBoxNovoJogador"><label><b>RPG - NodeJs</b></label></div>'+
          '<input id="nomeDoJogador" style="margin-top: 20px;" autocomplete="off" required="true" />'+
          '<button id="botaoNovoJogador" type="button" style="margin-top: 20px;" class="btn btn-primary" >Entrar no game</button></div>';

io.on('connection', function(socket){
  socket.userId = userId ++;
  console.log('Um novo usuário conectado#' + socket.userId);

  io.emit('startGame',{
    startGame: startGame
  });

  socket.on('chat', function(executa,dataStringA,dataStringB){
    status = 'Sucesso';

    if(executa == 'A'){
      dataStringB = 'Novo jogador conectado #'+socket.userId+'->'+dataStringA;
      console.log('Novo jogador #' + socket.userId + " : " + dataStringA);
    }else if (executa == 'B'){

    } else if (executa == 'C'){
      dataStringB = 'Chat #'+socket.userId+'->'+dataStringA+' diz :'+dataStringB;
      console.log('Chat jogador #' + socket.userId + " : " + dataStringA);
    } 
    
    io.emit('chat', {
      id: socket.userId,
      executa: executa,
      dataStringA: dataStringA,
      dataStringB: dataStringB,
      status: status
    });
  });
});



http.listen(3030, function(){
  console.log('Servidor Rodando:3030');
});