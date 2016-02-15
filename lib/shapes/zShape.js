var util = require('util');
var EventEmitter = require('events');
util.inherits(zShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function zShape(board) {
  // object of 4 blocks in z, starts flat [][]
  //                                        [][]
  this.blocks = {
    1: new Block(board, 4, 1),
    2: new Block(board, 5, 1),
    3: new Block(board, 5, 0),
    4: new Block(board, 6, 0)
  };
  this.rotation  = {
    1:{
      1:[4,1],
      2:[5,1],
      3:[5,0],
      4:[6,0]
    },
    2:{
      1:[4,0],
      2:[4,1],
      3:[5,1],
      4:[5,2]
    }
    3:{
      1:[4,1],
      2:[5,1],
      3:[5,0],
      4:[6,0]
    }
    4:{
      1:[5,0],
      2:[5,1],
      3:[6,1],
      4:[6,2]
    }
  };
  this.defaultRotation = 1;
};

module.exports = zShape;
