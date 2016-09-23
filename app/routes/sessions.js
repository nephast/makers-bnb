var models = require('../models');
var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var current_user;

/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('sign_in', {
    title: "User sign in"
  });
});

router.post('/', function(req, res, next) {
  sess = req.session;
  models.User.findOne({
    where: { email: req.body.email }
  })
    .then(function(user){
      if (bcrypt.compareSync(req.body.password, user.dataValues.password_digest)) {
        sess.current_user = user.dataValues.id;
        res.redirect('/');
      } else {
        res.redirect('/sessions/new');
      }
    })
    .catch(function(error){
      res.redirect('/users/new');
    });
});

router.post('/end', function(req, res, next) {
  sess = undefined;
  res.redirect('/sessions/new');
});

module.exports = router;
