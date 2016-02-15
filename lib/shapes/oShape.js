var util = require('util');
var EventEmitter = require('events');
util.inherits(oShape, EventEmitter);
var Block = require('../block');
var Shape = require('../shape');

function oShape(board) {
  // object of 4 blocks in O, starts flat [][]
  //                                      [][]

  this.shape = {
    1: new Block(board, 4, 0),
    2: new Block(board, 5, 0),
    3: new Block(board, 4, 1),
    4: new Block(board, 5, 1)
  };
  this.rotation  = {
    1:{
      1:[0,0],
      2:[0,0],
      3:[0,0],
      4:[0,0]
    },
    2:{
      1:[0,0],
      2:[0,0],
      3:[0,0],
      4:[0,0]
    },
    3:{
      1:[0,0],
      2:[0,0],
      3:[0,0],
      4:[0,0]
    },
    4:{
      1:[0,0],
      2:[0,0],
      3:[0,0],
      4:[0,0]
    }
  };
  this.defaultRotation = 1;
};

module.exports = oShape;
