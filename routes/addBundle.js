var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://arthronix@localhost/testdb');

router.post('/', function(req, res, next){
  values = [req.body.id, req.body.ex1, req.body.reps1, req.body.sets1, req.body.lev1];
  db.query('INSERT INTO bundles (id, ex1, reps1, sets1, lev1) VALUES($1, $2, $3, $4, $5)', values)
    .then(function(data) {
      res.json(data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

module.exports = router;
