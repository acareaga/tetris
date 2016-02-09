var assert = require('chai').assert;
var piece = require('../lib/piece');

describe('game piece', function(){
  it('appears on the screen', function(){
    var i = new piece();
    assert.equal(i, "Hello World");
  });
});
