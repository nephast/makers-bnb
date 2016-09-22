var models = require('../models');
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/new', function(req, res, next) {
  res.render('sign_in', {
    title: "User sign in"
  });
});

router.post('/', function(req, res, next) {
  models.User.findAll({
    where: {email: 'ewan@ewan1.com'}
  })
    .then(function(user){
      console.log(user[0].dataValues);
      if (user[0].dataValues.authenticate(req.body.password)){
        sess = req.session;
        sess.current_user = user._boundTo.dataValues.id;
        res.redirect('/');
      }
    })
    .catch(function(error){
      console.log(user);
      res.redirect('/users/new');
    });

});

module.exports = router;
