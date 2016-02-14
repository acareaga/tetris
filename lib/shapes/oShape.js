var util = require('util');
var EventEmitter = require('events');
util.inherits(oShape, EventEmitter);

function oShape(board, x = 0, y = 0) {
  // object of 4 blocks in O, starts flat [][]
  //                                      [][]

  this.blocks = {
    1: new Block(board, 1, 1),
    2: new Block(board, 2, 1),
    3: new Block(board, 1, 2),
    4: new Block(board, 2, 2)
  };
};

Block.prototype.defaultPosition = function() {
  return this.blocks = 1
};

module.exports = oShape;
