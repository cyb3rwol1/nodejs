
nomeArquivo = 'aa';//this;//"serialGenerator";
var logServidorInicio = require('./utils/inicioArquivo.js');

//Necessario:
/*
yesley.miranda 27/05/2018 - Aprendendo NodeJs

*/
var max = 5;

linhaLog = max;
logServidorInicio.servidor('aaaaaaaa','bbbbbbbbb');

module.exports.generate =  function (){
	return Math.floor(Math.random() * max);
}


var logServidorFinal = require('./utils/finalArquivo.js');