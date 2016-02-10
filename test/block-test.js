var assert = require('chai').assert;
var block = require('../lib/block');

describe('game block', function(){
  var block = new block({});

  it('should assign an x coordinate', function() {
    assert.equal(block.x, 0);
  });
});
