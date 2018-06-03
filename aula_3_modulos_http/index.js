var router = require('./router');

var app = router(3000);

var meuJason = [{nome : "YesleY Miranda"}];

app.get('/', function (req, res){
	res.write(JSON.stringify(meuJason));
	res.end();
});