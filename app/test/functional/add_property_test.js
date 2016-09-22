process.env.NODE_ENV = 'test';
var app = require('../../app');
var http = require('http');
var Browser = require('zombie');
var models = require('../../models');

describe('add property page', function() {

  before(function() {
     server = http.createServer(app).listen(3000);
     browser = new Browser({ site: 'localhost:3000'});
  });

  before(function(done) {
    browser.visit('/users/new', done);
  });

  before(function(done) {
    browser.fill('name', 'ewan', done);
    browser.fill('email', 'ewan@ewan.com', done);
    browser.fill('password', 'ewan', done);
    browser.fill('password_confirmation', 'ewan', done);
    browser.pressButton('Sign up!', done);
  });

  before(function(done) {
    browser.visit('/properties/new', done);
  });

  before(function(done) {
    browser
    .fill('name', 'Beautiful flat')
    .fill('description', 'close to center')
    .fill('price', 250)
    .pressButton('Submit', done);
  });

  it('should render a form', function() {
    browser.assert.success();
  });

  it('should redirect to home', function() {
    browser.assert.url({pathname: '/'});
  });

  after(function(done) {
    server.close(done);
  });

});
