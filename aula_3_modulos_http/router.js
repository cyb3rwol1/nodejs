var http = require('http');

var createRouter = function (port) {

	var routes = {
		GET: {}
	};

	var get = function (path, fn) {
		routes['GET'][path] = fn;
	};

	http.createServer(function(req,res){
		res.setHeader('Access-Control-Allow-Origin','*');

		if(!routes[req.method][req.url])
			return res.end();
		
		routes[req.method][req.url](req, res);
	}).listen(port);

	return {
		get: get
	};
};

module.exports = createRouter;