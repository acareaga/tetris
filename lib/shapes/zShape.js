var util = require('util');
var EventEmitter = require('events');
util.inherits(zShape, EventEmitter);
var Block = require('../block');

function zShape(board) {
  this.shape = {
    1: new Block(board, 4, 1, "#FF0000"),
    2: new Block(board, 5, 1, "#FF0000"),
    3: new Block(board, 5, 0, "#FF0000"),
    4: new Block(board, 6, 0, "#FF0000")
  };
  this.rotation  = {
    1: {
      1: [2, 1],
      2: [1, 0],
      3: [0, 1],
      4: [-1, 0]
    },
    2: {
      1: [-2, -1],
      2: [-1, 0],
      3: [0, -1],
      4: [1, 0]
    },
    3: {
      1: [2, 1],
      2: [1, 0],
      3: [0, 1],
      4: [-1, 0]
    },
    4: {
      1: [-2, -1],
      2: [-1, 0],
      3: [0, -1],
      4: [1, 0]
    }
  };
  this.defaultRotation = 1;
}

module.exports = zShape;
