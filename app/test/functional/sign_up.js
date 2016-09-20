process.env.NODE_ENV = 'test';
var app = require('../../app');
var http = require('http');
var Browser = require('zombie');

// Browser.localhost('makersbnb.com', 3000);

describe('sign up page', function() {

  // var browser = new Browser();

  before(function() {
     server = http.createServer(app).listen(3000);
     browser = new Browser({ site: 'localhost:3000'});
  });

  before(function(done) {
    browser.visit('/users', done);
  });

  before(function() {
    browser
      .fill('email', 'ewan@ewan.ewan')
      .fill('password', 'ewan')
      .fill('password_confirmation', 'ewan')
      .fill('name', 'ewan');
      // .pressButton('Sign up!', done);

  });

  it('should show a sign up form', function() {
    browser.assert.success();
  });



  after(function(done) {
    server.close(done);
  });

});
