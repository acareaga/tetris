var util = require('util');
var EventEmitter = require('events');
util.inherits(iShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function iShape(board) {
  this.shape = {
    1: new Block(board, 1, 0),
    2: new Block(board, 2, 0),
    3: new Block(board, 3, 0),
    4: new Block(board, 4, 0)
  };
  this.rotation  ={
    1:{
      1:[1,0],
      2:[2,0],
      3:[3,0],
      4:[4,0]
    },
    2:{
      1:[0,1],
      2:[0,2],
      3:[0,3],
      4:[0,4]
    }
  };
  this.defaultRotation = 1;
};


module.exports = iShape;

// object of 4 blocks in I, starts flat [][][][]
