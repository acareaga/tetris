var util = require('util');
var EventEmitter = require('events');
util.inherits(oShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function oShape(board) {
  // object of 4 blocks in O, starts flat [][]
  //                                      [][]

  this.blocks = {
    1: new Block(board, 4, 0),
    2: new Block(board, 5, 0),
    3: new Block(board, 4, 1),
    4: new Block(board, 5, 1)
  };
  this.rotation  = {
    1:{
      1:[4,0],
      2:[5,0],
      3:[4,1],
      4:[5,1]
    },
    2:{
      1:[4,0],
      2:[5,0],
      3:[4,1],
      4:[5,1]
    }
    3:{
      1:[4,0],
      2:[5,0],
      3:[4,1],
      4:[5,1]
    }
    4:{
      1:[4,0],
      2:[5,0],
      3:[4,1],
      4:[5,1]
    }
  };
  this.defaultRotation = 1;
};

module.exports = oShape;
