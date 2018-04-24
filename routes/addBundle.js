var express = require('express');
var router = express.Router();
var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://arthronix@localhost/testdb');

router.post('/', function(req, res, next){
   db.query('SELECT id FROM bundles where id = (SELECT max(id) FROM bundles)')
    .then(function(data) {
      let id = 1;                         //default
      if(data[0]) { id = parseInt(data[0].id) + 1; } //get the last row number to know what id we're on
      let values = [id];                //the values to insert into DB. start with bundle id.
      let exs = req.body.exercises;
      for(i = 0; i < exs.length; i++) { //fill in selected exercises
        if(exs[i].level != '-'){
          values.push(exs[i].key);
          values.push(exs[i].reps);
          values.push(exs[i].sets);
        }
      }
      if(values.length > 1) {           //fill in to get correct parameter size
        for(i = values.length; i < 31; i++) {
          values.push(null);
        }
                                        //insert into DB
        db.none('INSERT INTO bundles (ID, Ex1, Reps1, Sets1, Ex2, Reps2, Sets2, Ex3, Reps3, Sets3, Ex4, Reps4, Sets4, Ex5, Reps5, Sets5, Ex6, Reps6, Sets6, Ex7, Reps7, Sets7, Ex8, Reps8, Sets8, Ex9, Reps9, Sets9, Ex10, Reps10, Sets10) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31)', values)
           .catch(function(error) {
             console.log(error);
           });
        console.log("Generated bundle {id}");
        res.send({id});
      }
    })
    .catch(function(error) {
      console.log(error);
    })
  });

module.exports = router;
