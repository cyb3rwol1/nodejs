var serialGenerator = require('./serialGenerator.js');

console.log(serialGenerator.generate());


Object.keys(process).forEach(function(value){
	console.log(value);
});