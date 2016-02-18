var assert = require('chai').assert;
// var Block = require('../lib/block');
var Board = require('../lib/board');

describe('Game Block', function() {

  beforeEach(function () {
    this.board = new Board();
  });

  it('should default to 5x and 5y', function() {
    let block = this.board.addBlockToBoard();
    assert.equal(block.x, 5);
    assert.equal(block.y, 5);
  });

  it('can move down', function(){
    let block = this.board.addBlockToBoard(5, 15);
    block.moveDown();
    assert.equal(block.y, 16);
  });

  it('can move left',function(){
    let block = this.board.addBlockToBoard(10, 15);
    block.moveLeft();
    assert.equal(block.x, 9);
  });

  it('can move right', function(){
    let block = this.board.addBlockToBoard(10, 15);
    block.moveRight();
    assert.equal(block.x, 11 );
  });

  it('should default to active', function(){
    let block = this.board.addBlockToBoard();
    assert.equal(block.active, true);
  });

  it('inactive function changes status of block to false', function(){
    let block = this.board.addBlockToBoard();
    assert.equal(block.inactive(), false);
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

  it('can detect whether theres a block to the right', function(){
    let block = this.board.addBlockToBoard(1, 1);
    this.board.addBlockToBoard(2, 1);
    assert.equal(block.isThereABlockOnTheRight(), true);
  });

  it('can detect whether theres a block to the left', function(){
    let block = this.board.addBlockToBoard(2, 1);
    this.board.addBlockToBoard(1, 1);
    assert.equal(block.isThereABlockOnTheLeft(), true);
  });

  it('can detect whether theres a block in the space below', function(){
    let block = this.board.addBlockToBoard(2, 1);
    this.board.addBlockToBoard(2, 2);
    assert.equal(block.isThereABlockBelow(), true);
  });

  it('cannot move to the right if there is a block next to it', function(){
    let block = this.board.addBlockToBoard(1, 1);
    this.board.addBlockToBoard(2, 1);
    assert.equal(block.canMoveRight(), false);
  });

  it('cannot move to the left if there is a block next to it', function(){
    let block = this.board.addBlockToBoard(2, 1);
    this.board.addBlockToBoard(1, 1);
    assert.equal(block.canMoveLeft(), false);
  });

  it('cannot move down if there is a block below it', function(){
    let block = this.board.addBlockToBoard(2, 1);
    this.board.addBlockToBoard(2, 2);
    assert.equal(block.canMoveDown(), false);
  });
});
