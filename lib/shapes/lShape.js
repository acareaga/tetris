var util = require('util');
var EventEmitter = require('events');
util.inherits(lShape, EventEmitter);
var Block = require('../block');

function lShape(board) {
  // object of 4 blocks in L, starts flat   [][][]
                                          //[]
  this.shape = {
    1: new Block(board, 4, 0, "#FFA500"),
    2: new Block(board, 4, 1, "#FFA500"),
    3: new Block(board, 5, 1, "#FFA500"),
    4: new Block(board, 6, 1, "#FFA500")
  };
  this.rotation  = {
    1: {
      1: [0, 2],
      2: [1, 1],
      3: [0, 0],
      4: [-1, -1]
    },
    2: {
      1: [2, -1],
      2: [1, -2],
      3: [0, -1],
      4: [-1, 0]
    },
    3: {
      1: [0, -1],
      2: [-1, 0],
      3: [0, 1],
      4: [1, 2]
    },
    4: {
      1: [-2, 0],
      2: [-1, 1],
      3: [0, 0],
      4: [1, -1]
    }
  };
  this.defaultRotation = 1;
}

module.exports = lShape;
