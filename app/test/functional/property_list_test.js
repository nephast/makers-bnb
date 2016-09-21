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
    browser.visit('/properties/new', done);
  });

  before(function(done) {
    browser
    .fill('name', 'Beautiful flat')
    .fill('description', 'close to center')
    .fill('price', 250)
    .pressButton('Submit', done);
  });

  before(function(done) {
    browser.visit('/', done);
  });

  it('should be successful', function() {
    browser.assert.success();
  });

  it('should display listed property', function() {
    browser.assert.text('title', 'Available Properties');
  });

  it('should display listed property', function() {
    browser.assert.text('p', 'Beautiful flat');
  });

});
