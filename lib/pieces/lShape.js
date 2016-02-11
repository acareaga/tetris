var util = require('util');
var EventEmitter = require('events');
util.inherits(lShape, EventEmitter);

function lShape(board, x = 0, y = 0) {
  // object of 4 blocks in L, starts flat   [][][]
                                          //[]
  this.blocks = {
    1: new Block(board, 1, 1),
    2: new Block(board, 1, 0),
    3: new Block(board, 3, 0),
    4: new Block(board, 4, 0)
  };
};

Block.prototype.defaultPosition = function() {
  return this.blocks = 1
};

module.exports = lShape;
