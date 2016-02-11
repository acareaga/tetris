var util = require('util');
var EventEmitter = require('events');
util.inherits(iShape, EventEmitter);
var Block = require('../lib/block');

function iShape(board) {
  // object of 4 blocks in I, starts flat [][][][]
  this.blocks = {
    1: new Block(board, 1, 0),
    2: new Block(board, 2, 0),
    3: new Block(board, 3, 0),
    4: new Block(board, 4, 0)
  };
};

Block.prototype.defaultPosition = function() {
  return this.blocks = 1
};

module.exports = iShape;
