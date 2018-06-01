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
}).listen(3000,function(){
	console.log('Conectado Port:3000');
});
