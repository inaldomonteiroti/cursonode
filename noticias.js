var http = require('http');

var server = http.createServer( function (req, res){

    var categoria = req.url;
  

    if(categoria == '/tecnologia'){
        res.end("<html><body>Noticias Tecnologia</body></html>");
    }else if (categoria == '/moda'){
        res.end("<html><body>Notícias Moda</body></html>");
    }else if (categoria == '/beleza'){
        res.end("<html><body>Notícias Beleza</body></html>");
    }else{
        res.end("<html><body>Portal de Notícias</body></html>");
    }



});
console.log("Servidor ON");
server.listen(3000);