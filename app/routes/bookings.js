var models = require('../models');
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
  console.log(req.body.dates);
  models.Booking.create({ booking_date: req.body.dates,
                          UserId: sess.current_user,
                          PropertyID: req.body.prop_id});
  res.redirect('/');
});

module.exports = router;
