'use strict'

const express = require('express');
const bodyParse = require('body-paeser');

const app = express();
const router = express.Router();


//Roters
const indexRoute = require();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
	extend:false
}));

app.use('/', indexRoute);

module.exports = app;
