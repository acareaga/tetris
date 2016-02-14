var util = require('util');
var EventEmitter = require('events');
util.inherits(zShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function zShape(board) {
  // object of 4 blocks in z, starts flat [][]
  //                                        [][]
  this.blocks = {
    1: new Block(board, 1, 1),
    2: new Block(board, 2, 1),
    3: new Block(board, 2, 2),
    4: new Block(board, 2, 3)
  };
};

Block.prototype.defaultPosition = function() {
  return this.blocks = 1
};

module.exports = zShape;
