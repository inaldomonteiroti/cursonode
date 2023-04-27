var express = require('express');
var app = express(); //executando a funcao que o modulo do express retorna

app.set('view engine', 'ejs')

app.get('/', function(req,res){
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req,res){
    res.render("admin/form_add_noticia.ejs");
});

app.get('/noticias', function(req,res){
    res.render("noticias/noticias");
});

app.listen(3000, function(){
    console.log("Servidor Rodando com Express");
});