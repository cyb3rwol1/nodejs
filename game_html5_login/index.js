const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const optional = {
    host: 'localhost',
    port: 3001
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./resources/UsuarioResource')(app);




app.listen(optional, function () {
    console.log("Server login started!")
});