const express = require('express');
const router = express.Router();
const FileReader = require('filereader')
    , fileReader = new FileReader()
;

var FileAPI = require('file-api')
    , File = FileAPI.File
;

router.get('/', function (req, res) {
    try {
        console.log(req.method + " " + req.baseUrl);
        res.send('usuarios');
    } catch (err) {
        return res.status(400).send({erro: 'Falha na execução' + err})
    }
});

router.post('/', function (req, res) {
    try {
        req.accepts('application/json');


        fileReader.setNodeChunkedEncoding(true || false);
        fileReader.readAsDataURL(new File('./files/my-file.txt'));

        console.log("\n\nRequest :" + req.method + " " + req.protocol + " " + req.hostname + req.baseUrl + "\nBody:" + JSON.stringify(req.body) + "\nIp:" + req.ip + "\nURL :" + req.originalUrl);
        res.send('usuarios');
    } catch (err) {
        return res.status(400).send({erro: 'Falha na execução:' + err})
    }
});


module.exports = function (app) {
    app.use('/usuarios', router);
};