var models = require('../models');
var express = require('express');
var router = express.Router();
var current_user;
var user;

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('sign_up', {
    title: "User sign up"
  });
});

router.post('/', function(req, res, next) {
  sess = req.session;
  user = models.User.create({ Name: req.body.name,
                       email: req.body.email,
                       password: req.body.password,
                       password_confirmation: req.body.password_confirmation})
  .then(function() {
    sess.current_user = user._boundTo.dataValues.id;
    res.redirect('/');
  })
  .catch(function(error) {
    res.redirect('/users/new');
  });
});

module.exports = router;
