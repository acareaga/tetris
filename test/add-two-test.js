var assert = require('chai').assert;
var addTwo = require('../lib/add-two');


describe('addTwo', function(){
  it('should add two to a number', function(){
    assert.strictEqual(4, addTwo(2));
  })
})
