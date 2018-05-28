console.log('Ini - require :'+nomeArquivo+' :');

var log = function() {
	var servidor = function (logServidorString,bbb){
		console.log(logServidorString);
		console.log(bbb);
	}

	return {
		servidor :servidor
	};
}

module.exports = log();