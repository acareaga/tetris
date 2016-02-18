var util = require('util');
var EventEmitter = require('events');
util.inherits(jShape, EventEmitter);
var Block = require('../block');

function jShape(board) {
  this.shape = {
    1: new Block(board, 6, 0, "#0000FF"),
    2: new Block(board, 6, 1, "#0000FF"),
    3: new Block(board, 5, 1, "#0000FF"),
    4: new Block(board, 4, 1, "#0000FF")
  };

  this.rotation = {
    1: {
      1: [-2, 0],
      2: [-1, -1],
      3: [0, 0],
      4: [1, 1]
    },
    2: {
      1: [0, 1],
      2: [-1, 0],
      3: [0, -1],
      4: [1, -2]
    },
    3: {
      1: [2, 1],
      2: [1, 2],
      3: [0, 1],
      4: [-1, 0]
    },
    4: {
      1: [0, -2],
      2: [1, -1],
      3: [0, 0],
      4: [-1, 1]
    }
  };
  this.defaultRotation = 1;
}

module.exports = jShape;
