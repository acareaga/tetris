var util = require('util');
var EventEmitter = require('events');
util.inherits(lShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function lShape(board) {
  // object of 4 blocks in L, starts flat   [][][]
                                          //[]
  this.blocks = {
    1: new Block(board, 4, 0),
    2: new Block(board, 4, 1),
    3: new Block(board, 5, 1),
    4: new Block(board, 6, 1)
  };
  this.rotation  = {
    1:{
      1:[4,1],
      2:[4,1],
      3:[5,1],
      4:[6,1]
    },
    2:{
      1:[4,1],
      2:[5,1],
      3:[6,1],
      4:[6,2]
    }
    3:{
      1:[5,1],
      2:[5,2],
      3:[5,3],
      4:[4,3]
    }
    4:{
      1:[5,1],
      2:[5,2],
      3:[5,3],
      4:[6,1]
    }
  };
  this.defaultRotation = 1;
};

module.exports = lShape;
