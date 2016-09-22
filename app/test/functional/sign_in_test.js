process.env.NODE_ENV = 'test';
var app = require('../../app');
var http = require('http');
var Browser = require('zombie');
var models = require('../../models');

describe('sign in page', function() {

  before(function() {
     server = http.createServer(app).listen(3000);
     browser = new Browser({ site: 'localhost:3000'});
  });

  before(function(done) {
    browser.visit('/users/new', done);
  });

  before(function(done) {
    browser.fill('name', 'ewan', done);
    browser.fill('email', 'ewan@ewan.ewan', done);
    browser.fill('password', 'ewan', done);
    browser.fill('password_confirmation', 'ewan', done);
    browser.pressButton('Sign up!', done);
  });

  describe('user can sign in', function() {

    before(function(done) {
      browser.visit('/sessions/new', done);
    });

    it('sign in is successful', function() {
      browser.assert.success();
    });

    before(function(done) {
      browser.fill('email', 'ewan@ewan1.com', done);
      browser.fill('password', 'ewan', done);
      browser.pressButton('Sign in', done);
    });

    it('sign in is successful', function() {
      browser.assert.success();
    });

    it('path should be home page after sign in', function() {
      browser.assert.url({pathname: '/'});
    });

  });

  after(function(done) {
    server.close(done);
  });

});
