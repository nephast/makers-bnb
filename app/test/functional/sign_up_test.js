process.env.NODE_ENV = 'test';
var app = require('../../app');
var http = require('http');
var Browser = require('zombie');
var models = require('../../models');

describe('sign up page', function() {

  before(function() {
     server = http.createServer(app).listen(3000);
     browser = new Browser({ site: 'localhost:3000'});
  });

  before(function(done) {
    browser.visit('/users/new', done);
  });

  before(function(done) {

      browser.fill('email', 'ewan@ewan.ewan', done);
      browser.fill('password', 'ewan', done);
      browser.fill('password_confirmation', 'ewan', done);
      browser.fill('name', 'ewan', done);
      browser.pressButton('Sign up!', done);
  });

  it('should show a sign up form', function() {
    browser.assert.success();
  });

  it('form stores user in database', function() {
    browser.assert.url({pathname: '/'});
  });

  describe('incorrect sign up', function() {

    before(function(done) {
      browser.visit('/users/new', done);
    });

    before(function(done) {
      browser.fill('email', '', done);
        browser.fill('password', 'ewan', done);
        browser.fill('password_confirmation', 'ewan', done);
        browser.fill('name', 'ewan', done);
        browser.pressButton('Sign up!', done);
    });

    it('should not sign in', function() {
      browser.assert.url({pathname: '/users/new'});
    })

  })

  after(function(done) {
    server.close(done);
  });

});
