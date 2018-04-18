var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://arthronix@localhost/testdb');

router.put('/', function(req, res, next){
  let values = [];
  let exs = req.body.exercises;
  for(i = 0; i < exs.length; i++) { //fill in selected exercises
    if(exs[i].level != '-'){
      values.push(exs[i].key);
      values.push(exs[i].reps);
      values.push(exs[i].sets);
    }
  }
  if(values.length > 1) {           //fill in to get correct parameter size
    for(i = values.length; i < 30; i++) {
      values.push(null);
    }
    values.push(req.body.id);       //add the bundle id that we're updating.
                                    //insert into DB
    db.none('UPDATE bundles SET Ex1 = $1, Reps1 = $2, Sets1 = $3, Ex2 = $4, Reps2 = $5, Sets2 = $6, Ex3 = $7, Reps3 = $8, Sets3 = $9, Ex4 = $10, Reps4 = $11, Sets4 = $12, Ex5 = $13, Reps5 = $14, Sets5 = $15, Ex6 = $16, Reps6 = $17, Sets6 = $18, Ex7 = $19, Reps7 = $20, Sets7 = $21, Ex8 = $22, Reps8 = $23, Sets8 = $24, Ex9 = $25, Reps9 = $26, Sets9 = $27, Ex10 = $28, Reps10 = $29, Sets10 = $30 WHERE id = $31', values)
       .then(function(data) {
         console.log("UPDATE COMPLETE");
         res.json(data);
       })
       .catch(function(error) {
         console.log(error);
       });
  }
});

module.exports = router;
