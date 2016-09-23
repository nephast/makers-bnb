var models = require('../models');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('sign_in', {
    title: "User sign in"
  });
});

router.post('/', function(req, res, next) {
  models.User.findOne({
    where: { email: req.body.email }
  })
    .then(function(user){
      if (bcrypt.compareSync(req.body.password, user.dataValues.password_digest)) {
        res.redirect('/');
      } else {
        res.redirect('/sessions/new');
      }
    })
    .catch(function(error){
      res.redirect('/users/new');
    });
});

module.exports = router;
