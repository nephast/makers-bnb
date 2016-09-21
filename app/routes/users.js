var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('sign_up', {
    title: "User sign up"
  });
  // res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  models.User.create({ Name: req.body.name,
                       email: req.body.email,
                       password: models.User.generateHash(req.body.password)})
  .then(function() {
    res.redirect('/');
  })
  .catch(function(error) {
    res.redirect('/users/new');
  });
});

// router.get('/users/new', function(req, res, next) {
// });

module.exports = router;
