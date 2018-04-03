var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://arthronix@localhost/testdb');

router.get('/', function(req, res, next){
  db.any('SELECT * FROM bundles')
     .then(function(data) {
       console.log(data);
       res.json(data);
     })
     .catch(function(error) {
       console.log(error);
     });
});

module.exports = router;
