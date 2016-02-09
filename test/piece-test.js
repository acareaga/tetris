var assert = require('chai').assert;
var Piece = require('../lib/piece');

describe('game piece', function(){
  var piece = new Piece({});

  it('should assign an x coordinate', function() {
    assert.equal(piece.x, 0);
  });
});
