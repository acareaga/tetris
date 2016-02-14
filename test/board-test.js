var assert = require('chai').assert;
var Board = require('../lib/board');
var Block = require('../lib/block')

describe('Game Board', function(){

  it('has rows', function() {
    let board = new Board (0,20)
    assert.equal(board.rows, 20);
  });

  it('has columns', function() {
    let board = new Board(100,0)
    assert.equal(board.columns, 100);
  });

  it('defaults to a 10x20 board', function(){
    let board = new Board()
    assert.equal(board.columns,10)
    assert.equal(board.rows, 20)
  });

  it('size can be changed to whatever we want', function(){
    let board = new Board(1000,10000)
    assert.equal(board.columns, 1000)
    assert.equal(board.rows, 10000)
  });

  it('has a collection of blocks', function() {
    let board = new Board(20, 20)
    assert.isArray(board.blocks);
  });

  it('can detect the position of a block on the board', function(){
    let board = new Board(10, 20)
    let block = board.addBlockToBoard(10, 10)
    assert.equal(board.findBlockOnBoard(10, 10), block);
  });

  it('can detect when a row of blocks is full', function() {
    let board = new Board(10, 20)
    board.addBlockToBoard(1, 16)
    board.addBlockToBoard(2, 16)
    board.addBlockToBoard(3, 16)
    board.addBlockToBoard(4, 16)
    board.addBlockToBoard(5, 16)
    board.addBlockToBoard(6, 16)
    board.addBlockToBoard(7, 16)
    board.addBlockToBoard(8, 16)
    board.addBlockToBoard(9, 16)
    board.addBlockToBoard(10, 16)
    board.rowChecker()
    assert.equal(board.blocks.length, 0);
  });

  it('returns undefined if a row is not full', function(){
    let board = new Board(10,20)
    board.addBlockToBoard(1,1)
    board.addBlockToBoard(2,5)
    board.addBlockToBoard(5,2)
    assert.equal(board.rowChecker(), undefined)
  });

  it ('it can clear out a full row of blocks', function(){
    let board = new Board(10,20)
    board.addBlockToBoard(1,1)
    board.addBlockToBoard(2,5)
    board.addBlockToBoard(5,2)
    board.addBlockToBoard(1, 16)
    board.addBlockToBoard(2, 16)
    board.addBlockToBoard(3, 16)
    board.addBlockToBoard(4, 16)
    board.addBlockToBoard(5, 16)
    board.addBlockToBoard(6, 16)
    board.addBlockToBoard(7, 16)
    board.addBlockToBoard(8, 16)
    board.addBlockToBoard(9, 16)
    board.addBlockToBoard(10, 16)
    board.rowChecker()
    assert.equal(board.blocks.length, 3 )
  });

  it ('it can clear out a full row of blocks with a mirade of blocks on the board', function(){
    let board = new Board(10,20)
    board.addBlockToBoard(1,1)
    board.addBlockToBoard(2,5)
    board.addBlockToBoard(5,2)
    board.addBlockToBoard(1,3)
    board.addBlockToBoard(2,6)
    board.addBlockToBoard(5,7)
    board.addBlockToBoard(1,10)
    board.addBlockToBoard(2,12)
    board.addBlockToBoard(5,11)
    board.addBlockToBoard(1, 19)
    board.addBlockToBoard(2, 19)
    board.addBlockToBoard(3, 19)
    board.addBlockToBoard(4, 19)
    board.addBlockToBoard(5, 19)
    board.addBlockToBoard(6, 19)
    board.addBlockToBoard(7, 19)
    board.addBlockToBoard(8, 19)
    board.addBlockToBoard(9, 19)
    board.addBlockToBoard(10, 19)
    board.rowChecker()
    assert.equal(board.blocks.length, 9 )
  });
});
