var assert = require('chai').assert;
var Block = require('../lib/block');
import Board from '../lib/board';

describe('Game Block', function() {

  beforeEach(function () {
    this.board = new Board();
  });

  it('should default to 0x and 0y', function() {
    let block = this.board.addBlockToBoard();
    assert.equal(block.x, 0);
    assert.equal(block.y, 0);
  });

  it('should move down', function(){
    let block = this.board.addBlockToBoard(5, 15);
    block.moveDown()
    assert.equal(block.y, 16);
  });

  it('should move left',function(){
    let block = this.board.addBlockToBoard(10,15)
    block.moveLeft()
    assert.equal(block.x, 9)
  });

  it('should move right', function(){
    let block = this.board.addBlockToBoard(10,15)
    block.moveRight()
    assert.equal(block.x, 11 )
  });
});
