var util = require('util');
var EventEmitter = require('events');
util.inherits(Board, EventEmitter);
import Block from './block';

function Board(columns = 10, rows = 20) {
  this.columns        = columns
  this.rows           = rows
  this.blocks         = []
  this.rowBlockCount  = { 1: 0, 2: 0, 3: 0,
                          4: 0, 5: 0, 6: 0,
                          7: 0, 8: 0, 9: 0,
                          10: 0, 11: 0, 12: 0,
                          13: 0, 14: 0, 15: 0,
                          16: 0, 17: 0, 18: 0,
                          19: 0, 20: 0
                        };
};

Board.prototype.addBlockToBoard = function(x, y) {

  let block = new Block(this, x, y);
  this.blocks.push(block);
  return block
};

Board.prototype.findBlockOnBoard = function(x, y) {
  for (let block of this.blocks) {
    if (block.x === x && block.y === y) { return block };
  }
};

Board.prototype.rowChecker = function() {
  for (let block of this.blocks) {
    this.rowBlockCount[block.y] += 1;
    if(this.rowBlockCount[block.y] === 10) { return true } else { false }
  };
};

module.exports = Board;
