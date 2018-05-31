
var max = 5;

linhaLog = max;

module.exports.generate =  function (){
	return Math.floor(Math.random() * max);
}

