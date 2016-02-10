var assert = require('chai').assert;
var Block = require('../lib/block');
import Board from '../lib/board';

describe('Game Block', function() {

  beforeEach(function () {
    this.board = new Board();
  });

  it('should default to 0x and 0y', function() {

    let block = this.board.addBlockToBoard(10, 10);
    assert.equal(block.x, 10);
    assert.equal(block.y, 10);
  });

  it('')
});
