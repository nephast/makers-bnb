var models = require('../models');
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  // models.Property.create({ Name: req.body.name,
  //                      description: req.body.description,
  //                      price: req.body.price,
  //                      UserId: sess.current_user});
  res.redirect('/');
});

module.exports = router;
