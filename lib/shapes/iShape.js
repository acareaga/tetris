var util = require('util');
var EventEmitter = require('events');
util.inherits(iShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function iShape(board) {
  this.shape = {
    1: new Block(board, 3, 0, "#00ffff"),
    2: new Block(board, 4, 0, "#00ffff"),
    3: new Block(board, 5, 0, "#00ffff"),
    4: new Block(board, 6, 0, "#00ffff")
  };
  this.rotation  ={
    1: {
      1: [2, 3],
      2: [1, 2],
      3: [0, 1],
      4: [-1, 0]
    },
    2: {
      1: [-2, -3],
      2: [-1, -2],
      3: [0, -1],
      4: [1, 0]
    },
    3: {
      1: [2, 3],
      2: [1, 2],
      3: [0, 1],
      4: [-1, 0]
    },
    4: {
      1: [-2, -3],
      2: [-1, -2],
      3: [0, -1],
      4: [1, 0]
    }
  };
  this.defaultRotation = 1;
};


module.exports = iShape;

// object of 4 blocks in I, starts flat [][][][]
