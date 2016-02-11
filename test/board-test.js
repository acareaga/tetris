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

  xit('rows and columns cannot be negative', function(){
    let board = new Board(-10, -10);
    assert.throw(board.colums, 'function throws a reference error')
    assert.throw(board.rows, 'function throws a reference error')
  });

  xit('knows when a row of blocks is full', function() {
    assert.equal(board.x, 0);
  });
});
