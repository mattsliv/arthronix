var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://arthronix@localhost/testdb');


router.delete('/', function(req, res, next){
  let bid = req.body.id; // need the bundle id to delete!
  db.none('DELETE FROM bundles WHERE id=$1', bid)
     .then(function(data) {
       console.log("REMOVED BUNDLE {bid}");
     })
     .catch(function(error) {
       console.log(error);
     });
});

module.exports = router;
