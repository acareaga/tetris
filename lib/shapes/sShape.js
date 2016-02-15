var util = require('util');
var EventEmitter = require('events');
util.inherits(sShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function sShape(board) {
  // object of 4 blocks in s, starts flat    [][]
  //                                       [][]
  this.blocks = {
    1: new Block(board, 6, 1),
    2: new Block(board, 5, 1),
    3: new Block(board, 5, 0),
    4: new Block(board, 4, 0)
  };
  this.rotation  = {
    1:{
      1:[6,1],
      2:[5,1],
      3:[5,0],
      4:[4,0]
    },
    2:{
      1:[5,1],
      2:[5,2],
      3:[6,1],
      4:[6,0]
    }
    3:{
      1:[6,1],
      2:[5,1],
      3:[5,0],
      4:[4,0]
    }
    4:{
      1:[4,1],
      2:[4,2],
      3:[5,1],
      4:[5,0]
    }
  };
  this.defaultRotation = 1;
};

module.exports = sShape;
