console.log('Servidor rodando papai!');
var http = require('http');
var server = http.createServer(function(req, res){
  res.end("Sou o servidor e estou mandando um oi! :p");
});
server.listen(3000);
