var models = require('../models');
var express = require('express');
var router = express.Router();


router.get('/new', function(req, res, next) {
  res.render('add_property', {
    title: "Add property"
  });
  // res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  models.Property.create({ Name: req.body.name,
                       description: req.body.description,
                       price: req.body.price,
                       UserId: sess.current_user});
  res.redirect('/');
});

router.get('/:id', function(req, res, next) {
  models.Property.findById(req.params.id).then(function(property) {
    res.render('property_booking', {
      title: 'Property booking',
      property: property,
    });
  });
});

module.exports = router;
