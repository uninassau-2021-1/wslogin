var express = require('express');
var router = express.Router();

var ModelLogin = require('../models/ModelLogin');



router.get('/', function(req, res, next) {

  // Método para recuperar o login
  // http://localhost:3000/login?usuario=abc&senha=123
  new ModelLogin().getLogin(req.query.usuario, req.query.senha)
    .then(resultsJSON => {
      console.log(resultsJSON);
      res.send(resultsJSON);
    })
    .catch(err => console.error(err));


});

module.exports = router;
