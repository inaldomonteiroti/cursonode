var express = require('express');
var app = express(); //executando a funcao que o modulo do express retorna
app.set('view engine', 'ejs');

module.exports = app;