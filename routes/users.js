var express = require('express');
var router = express.Router();

var pgp = require('pg-promise')(/*options*/)
var db = pgp('postgres://arthronix@localhost/testdb');

console.log(db);

router.get('/', function(req, res, next){
  db.any('SELECT * FROM Patients')
    .then(function(data) {
      //console.log(data);
      res.json(data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

/*
router.get('/', function(req, res, next) {
  res.json([
    {
      id: 0,
      name: 'Shemona Singhasdfasfd',
      status: 'green',
      messages: true,
      type: 'Knee',
      appointment: 'October 7th, 9am'
    },
    {
      id: 1,
      name: 'Chris Stumper',
      status: 'yellow',
      messages: false,
      type: 'Hip',
      appointment: 'November 4th, 1pm'
    },
    {
      id: 2,
      name: 'Matthew Slivinski',
      status: 'red',
      messages: true,
      type: 'Knee',
      appointment: 'October 1st, 9:30am'
    },
    {
      id: 3,
      name: 'Elaine Tsun',
      status: 'green',
      messages: false,
      type: 'Hip',
      appointment: 'December 16th, 12pm'
    },
    {
      id: 4,
      name: 'Savanna Smith',
      status: 'yellow',
      messages: true,
      type: 'Knee',
      appointment: 'November 8th, 3pm'
    }
  ]);
});
*/

module.exports = router;
