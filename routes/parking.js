var express = require('express');
var router = express.Router();

var parking = require('../database/parking');

router.get('/', function (req, res, next) {
  parking
    .fetchAll()
    .then(function (contacts) {
      res.json({ contacts });
    }, function (err) {
      console.log(err);
    });
});

module.exports = router;
