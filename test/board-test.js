var assert = require('chai').assert;

import Board from '../lib/board';

var block = require('../lib/block');

describe('Game Board', function(){

  it('has rows', function() {
    let board = new Board (0,20)
    assert.equal(board.rows, 20);
  });

  it('has columns', function() {
    let board = new Board(100,0)
    assert.equal(board.columns, 100);
  });

  it('has a collection of blocks', function() {
    let board = new Board(20, 20)
    assert.isArray(board.blocks);
  });

  xit('knows when a row of blocks is full', function() {
    assert.equal(board.x, 0);
  });
});
