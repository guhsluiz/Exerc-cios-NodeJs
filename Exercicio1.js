var http = require('http');
var request = require('request')
var requestMicroServico = "Erro no pagamento";

function iniciadoSistemaCiaAerea() {
  return "Sistema Cia Aérea";
}

function acionaModuloCatalogo() {
  return "Modulo de Catálogo de Assentos";
}

function acionaModuloReservas(){
  return "Modulo de Reservas de Assentos";
}

function acionaModuloVenda(){
  return "Modulo de Venda de Assentos";
}

function acionaModuloPagamento(){
  return "Modulo de Pagamento";
}

http.createServer(function (req, res) {

  var sequenciaExecucao = ' => ' + iniciadoSistemaCiaAerea() +

    '==> ' + acionaModuloCatalogo() +
    '==> ' + acionaModuloReservas() +
    '==> ' + acionaModuloVenda() +
    '==> ' + acionaModuloPagamento() +
    '==> ' + requestMicroServicoAvaliaPagamento();
    
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(sequenciaExecucao);
  res.end();

}).listen(8080);

function requestMicroServicoAvaliaPagamento() {
    
    request('http://localhost:8081', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            requestMicroServico = body;
            console.log(body);
    }
    })
    return requestMicroServico;
}

//Gustavo Luiz da Silva Pereira 33618771