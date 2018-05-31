var net = require('net');

var client = net.connect({host:'localhost', port:3000}, function(){
	console.log('Conectado em 3000.');
	client.write('Usuario Conectado!');
});
client.on('data',function(message){
	console.log(message.toString());
});
process.stdin.on('readable',function(){
	var message = process.stdin.read();
	if(!message) 
		return;
	client.write(message.toString().replace('/\n/',''));
})

