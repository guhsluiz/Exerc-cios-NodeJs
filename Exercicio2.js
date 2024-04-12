var minhaBiblioreca = require("./ExemploModule");
var http = require('http')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(minhaBiblioreca.primeiroNome);
    res.write(minhaBiblioreca.sobrenome);
    res.write(minhaBiblioreca.codigoMatricula);
    res.end();
   }).listen(8080);

console.log(minhaBiblioreca.primeiroNome)

