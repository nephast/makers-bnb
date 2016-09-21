var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Property.findAll().then(function(properties) {
    res.render('index', {
      title: 'Available Properties',
      properties: properties,
    });
<<<<<<< HEAD
=======
    console.log(properties.length);
>>>>>>> 29989e9dd436c638fd75e7cee30a439650d9b9e8
  });
});

module.exports = router;
