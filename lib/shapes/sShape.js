var util = require('util');
var EventEmitter = require('events');
util.inherits(sShape, EventEmitter);
var Block = require('../block');

function sShape(board) {
  this.shape = {
    1: new Block(board, 6, 1, "#00FF00"),
    2: new Block(board, 5, 1, "#00FF00"),
    3: new Block(board, 5, 0, "#00FF00"),
    4: new Block(board, 4, 0, "#00FF00")
  };
  this.rotation  = {
    1: {
      1: [0, -1],
      2: [1, 0],
      3: [0, 1],
      4: [1, 2]
    },
    2: {
      1: [0, 1],
      2: [-1, 0],
      3: [0, -1],
      4: [-1, -2]
    },
    3: {
      1: [0, -1],
      2: [1, 0],
      3: [0, 1],
      4: [1, 2]
    },
    4: {
      1: [0, 1],
      2: [-1, 0],
      3: [0, -1],
      4: [-1, -2]
    }
  };
  this.defaultRotation = 1;
}

module.exports = sShape;
