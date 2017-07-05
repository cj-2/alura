module.exports = function(app){
  app.get('/produtos', function(req, res){
    var connection = app.infra.connectionFactory();

    connection.query('SELECT * FROM produtos', function(erro, result){
      res.render('produtos/lista',{ lista : result });
    });
    connection.end();
  });
}
