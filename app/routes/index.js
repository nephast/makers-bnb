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
    console.log(properties.length);
  });
});

module.exports = router;
