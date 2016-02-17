var util = require('util');
var EventEmitter = require('events');
util.inherits(tShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function tShape(board) {
  // object of 4 blocks in t, starts flat   [][][]
  //                                          []
  this.shape = {
    1: new Block(board, 4, 1, "#800080"),
    2: new Block(board, 5, 0, "#800080"),
    3: new Block(board, 5, 1, "#800080"),
    4: new Block(board, 6, 1, "#800080")
  };
  this.rotation  = {
    1: {
      1: [1, 1],
      2: [-1, 1],
      3: [0, 0],
      4: [-1, -1]
    },
    2: {
      1: [1, -2],
      2: [1, 0],
      3: [0, -1],
      4: [-1, 0]
    },
    3: {
      1: [-1, 0],
      2: [1, 0],
      3: [0, 1],
      4: [1, 2]
    },
    4: {
      1: [-1, 1],
      2: [-1, -1],
      3: [0, 0],
      4: [1, -1]
    }
  };
  this.defaultRotation = 1;
};

module.exports = tShape;
