// Get a Board model up and running with rows, columns, and a collection of blocks
var util = require('util');
var EventEmitter = require('events');
util.inherits(Board, EventEmitter);
import Block from './block';

  function Board(columns = 10, rows = 20) {
    this.columns = columns
    this.rows    = rows
    this.blocks  = []
  };

  Board.prototype.addBlockToBoard = function(x, y) {
    let block = new Block(this, x, y);
    this.blocks.push(block);
    return block;
  };

  Board.prototype.findBlockOnBoard = function(x, y) {
    for (let block of this.blocks) {
      if (block.x === x && block.y === y) { return block };
    }
  };

  Board.prototype.isRowFull = function() {
    // we need a function that checks ifi the rows on the board are completed
  };

  // we need to add a function that will then let us add blocks with an emitter that will be triggered when the block is rendered inactive
  // we need a function that returns the position of the block based on that event.

module.exports = Board;
