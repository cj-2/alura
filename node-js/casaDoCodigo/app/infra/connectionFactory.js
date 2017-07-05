var mysql = require('mysql');

function createDbConnection() {
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '%BeE$&7a',
    database: 'casadocodigo_nodejs'
  });
}

module.exports = function(){
  return createDbConnection();
}
