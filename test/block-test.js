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

  it('can move down', function(){
    let block = this.board.addBlockToBoard(5, 15);
    block.moveDown()
    assert.equal(block.y, 16);
  });

  it('can move left',function(){
    let block = this.board.addBlockToBoard(10, 15)
    block.moveLeft()
    assert.equal(block.x, 9)
  });

  it('can move right', function(){
    let block = this.board.addBlockToBoard(10, 15)
    block.moveRight()
    assert.equal(block.x, 11 )
  });

  it('should default to active', function(){
    let block = this.board.addBlockToBoard();
    assert.equal(block.active, true)
  });

  it('inactive function changes status of block to false', function(){
    let block = this.board.addBlockToBoard();
    assert.equal(block.inactive(), false)
  });

  it('can tell if the block is at the bottom of the board', function(){
    let block = this.board.addBlockToBoard(10, 20);
    assert.equal(block.blockIsAtBottomOfBoard(), true);
  });

  it('can tell if the block is at the left side of the board', function(){
    let block = this.board.addBlockToBoard(0, 20);
    assert.equal(block.blockIsAtLeftSideOfBoard(), true);
  });

  it('can tell if the block is at the right side of the board', function(){
    let block = this.board.addBlockToBoard(10, 20);
    assert.equal(block.blockIsAtRightSideOfBoard(), true);
  });

  it('cannot move down when it is at the bottom of the board', function(){
    let block = this.board.addBlockToBoard(10, 20);
    assert.equal(block.canMoveDown(), false);
  });

  it('cannot move left when it as the leftside of the board', function(){
    let block = this.board.addBlockToBoard(0,20);
    assert.equal(block.canMoveLeft(),false);
  });

  it('cannot move right when it as the rightside of the board', function(){
    let block = this.board.addBlockToBoard(10,20);
    assert.equal(block.canMoveRight(),false);
  });


  // it('status should change when the block hits the bottom of the grid', function(){
  //   let block = this.board.addBlockToBoard(10,20);
  //   assert.equal(block.canMoveDown(), false);
  // });

});
