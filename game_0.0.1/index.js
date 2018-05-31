var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var userId = 0;
var jogadores = [];
var tela,nome,dataStringA,dataStringB = "";
var status = "Off";

io.on('connection', function(socket){
  socket.userId = userId ++;
  console.log('Um novo usuário conectado ID#' + socket.userId);

  socket.on('chat', function(executa,dataStringA,dataStringB){

    tela = "";

    if(executa == 'novoPlayer'){
      dataStringB = 'Novo jogador conectado #'+socket.userId+'->'+dataStringA;
      console.log('Novo jogador #' + socket.userId + " : " + dataStringA);
      jogador = {"nome": dataStringA, "status": "livre" }
      jogadores[socket.userId] = jogador;
      nome = jogadores[socket.userId].nome;
      status = jogadores[socket.userId].status;
    } else if (executa == 'B'){

    } else if (executa == 'C'){
      dataStringB = 'Chat #'+socket.userId+'->'+jogadores[socket.userId].nome+' diz :'+dataStringA;
      console.log('Chat jogador #' + socket.userId + " - "+jogadores[socket.userId].nome + ":" + dataStringA);
    } 
    
    io.emit('chat', {
      id: socket.userId,
      executa: executa,
      jogador: {"status": status, "nome":nome },
      dataStringA: dataStringA,
      dataStringB: dataStringB,
      tela: tela
    });
  });
});



http.listen(3000, function(){
  console.log('Servidor Rodando:3000');
});