var util = require('util');
var EventEmitter = require('events');
util.inherits(tShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function tShape(board) {
  // object of 4 blocks in t, starts flat   [][][]
  //                                          []
  this.blocks = {
    1: new Block(board, 1, 1),
    2: new Block(board, 1, 2),
    3: new Block(board, 2, 2),
    4: new Block(board, 1, 3)
  };
};

Block.prototype.defaultPosition = function() {
  return this.blocks = 1
};

module.exports = tShape;
