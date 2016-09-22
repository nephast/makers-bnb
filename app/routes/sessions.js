var models = require('../models');
var express = require('express');
var router = express.Router();
var user;


/* GET users listing. */
router.get('/new', function(req, res, next) {
  sess = null;
  res.render('sign_in', {
    title: "User sign in"
  });
});

router.post('/', function(req, res, next) {
  sess = req.session;
  console.log(sess);
  user = models.User.findAll({
    where: {email: req.body.email}
  })
    .then(function(user){
      if (user[0].dataValues.email === 'ewan@ewan1.com'){

        sess.current_user = user._boundTo.dataValues.id;
        console.log(sess.current_user);
        res.redirect('/');
      }
    })
    .catch(function(error){
      res.redirect('/users/new');
    });
});

module.exports = router;
