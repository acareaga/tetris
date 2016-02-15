var util = require('util');
var EventEmitter = require('events');
util.inherits(tShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function tShape(board) {
  // object of 4 blocks in t, starts flat   [][][]
  //                                          []
  this.blocks = {
    1: new Block(board, 4, 1),
    2: new Block(board, 5, 0),
    3: new Block(board, 5, 1),
    4: new Block(board, 6, 1)
  };
  this.rotation  = {
    1:{
      1:[4,1],
      2:[5,0],
      3:[5,1],
      4:[6,1]
    },
    2:{
      1:[4,1],
      2:[5,2],
      3:[5,1],
      4:[6,1]
    }
    3:{
      1:[5,0],
      2:[5,1],
      3:[6,1],
      4:[5,2]
    }
    4:{
      1:[5,0],
      2:[4,1],
      3:[5,1],
      4:[5,2]
    }
  };
  this.defaultRotation = 1;
};

module.exports = tShape;
