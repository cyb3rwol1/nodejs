var express = require('express');
var app = express();
var port = '3000';

app.get('/', function (req, res) {
    res.send('Funcionando');
});

app.get('/teste', function (req, res) {
    res.send('Funcionando TESTE');
});

app.get('/yano', function (req, res) {
    res.send('Funcionando yano');
});

app.listen(port, function () {
    console.log('Server start '+port);
});