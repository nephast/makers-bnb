process.env.NODE_ENV = 'test';
var app = require('../../app');
var http = require('http');
var Browser = require('zombie');


describe('sign up page', function() {

  before(function() {
    this.server = http.createServer(app).listen(3000);
    this.browser = new Browser({ site: 'http://localhost:3000'});
  });

  before(function(done) {
    this.browser.visit('/', done);
  });

  it('should be succesful', function() {
    this.browser.assert.success();
  });

  it('should show a sign up form');

  after(function(done) {
    this.server.close(done);
  });

});
