var net = require('net');

net.createServer(function(connection){
	connection.write('Seja bem vindo ao chat!');
	connection.on('data',function(message){
		console.log(message.toString());
	});
}).listen(3000,function(){
	console.log('Conectado Port:3000');
});
