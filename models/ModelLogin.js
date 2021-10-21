const HandleDBMSMySQL = require('../config/database/HandleDBMSMySQL');



class ModelLogin {

  constructor() {
    this._HandleDBMSMySQL = new HandleDBMSMySQL();
  }

  destroy(param=null) {
    var varToString = varObj => Object.keys(varObj)[0];
    new Error('Parâmetros incorretos para a classe: \`%s\`, parâmetro \`%s\`', this.constructor.name, varToString({param}));
  }

  getLogin(usuario=null, senha=null) {
    var sqlSelect = `select * from acesso.usuarios where usuario='${usuario}' and senha='${senha}' limit 1`;
    // var sqlSelect = `select * from acesso.usuarios`;
    var resultsJSON = this._HandleDBMSMySQL;
    return new Promise((resolve, reject) => {
      resultsJSON.query(sqlSelect, (err, results) => {
        if(err) {
          console.log(err);
          reject(err);
        } else {
          resolve(results);
        }
      });
      this._HandleDBMSMySQL.close();
    });
  }

}

module.exports = ModelLogin;
