var net = require('net');

var connections = [];

var trocaMensagem = function(mensagem){
	connections.forEach(function(connection){
		connection.write(mensagem.toString());
	});
};

net.createServer(function(connection){
	connections.push(connection);
	connection.write('Seja bem vindo ao chat!');
	connection.on('data',function(mensagem){
		trocaMensagem(mensagem);
	});
}).listen('localhost:3000',function(){
	console.log('Servidor criado em  localhost:3000');
});
