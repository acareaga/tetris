var util = require('util');
var EventEmitter = require('events');
// var Block = require('./block');
util.inherits(Board, EventEmitter);
var _ = require('lodash');

var iShape = require('./shapes/iShape');
var jShape = require('./shapes/jShape');
var lShape = require('./shapes/lShape');
var oShape = require('./shapes/oShape');
var sShape = require('./shapes/sShape');
var tShape = require('./shapes/tShape');
var zShape = require('./shapes/zShape');
var Shape = require('./shape');

// var shapes = [iShape, jShape, lShape, oShape, sShape, tShape, zShape];
var shapes = [oShape]

function Board(columns = 10, rows = 20) {
  this.columns        = columns;
  this.rows           = rows;
  this.pieces         = [];
  this.blocks         = [];
  this.score          = 0;
  this.rowBlockCount  = [ [], [], [], [], [],
                          [], [], [], [], [],
                          [], [], [], [], [],
                          [], [], [], [], []
                        ];
}

Board.prototype.draw = function (context) {
  _.each(this.pieces, function(piece){
    piece.draw(context);
  });
};

Board.prototype.generateShape = function() {
  var shape =  _.sample(shapes);
  var randoShape = new shape(this);
  var currentShape = new Shape(randoShape);
  return this.addBlockToBoard(currentShape);
};

Board.prototype.generate = function(context) {
  context.fillRect(this.rows, this.columns, this.pieces);
  _.each(this.pieces, function(block){
    context.fillRect(block.x, block.y, 5, 5);
  });
};

Board.prototype.addBlockToBoard = function(shape) {
  this.pieces.push(shape);
  return shape;
};

Board.prototype.findBlockOnBoard = function(x, y) {
  for (let block of this.pieces) {
  if (block.x === x && block.y === y) { return block }
  };
};
  // for (let shapes of this.pieces) {
  //   _.every(shapes, function(pieces) {
  //     _.every(pieces.pieces, function(block) {
  //       debugger;
  //         if (block.x === x && block.y === y) {return block; }
  //     });
  //   });
  // }
// };

// FIX THESE FOR CHECKING AND CLEARING ROWS -- NEED TO ITERATE INTO SHAPE OBJECT
Board.prototype.rowChecker = function() {
  let board = this
  let inactiveBlocks = [];
  _.filter(this.pieces, function(inactiveShapes){
    if (inactiveShapes.active === false ) {
      for (let block in inactiveShapes.piece.shape) {
        return inactiveBlocks.push(inactiveShapes.piece.shape[block]);
      }
    }
  });

  _.each(inactiveBlocks, function(block){
    return block.board.rowBlockCount[block.y].push(block);
  });

  this.rowBlockCount.forEach(function(row) {
    if(row.length > 1) {
        _.each(row[0].board.pieces,function(shape){
        for(let block in shape.piece.shape){
          if (shape.piece.shape[block].y === block) {
            shape.piece.shape[block].x = -100,
            shape.piece.shape[block].y = -100
          }
        }
      })
      //  row = []
     }
  });
};

Board.prototype.clearRow = function(rowNumber) {
  for (let shape in this.pieces) {
    var updateShapeBlocks = this.pieces[shape].piece.shape;
    for (let block in updateShapeBlocks) {
      var piece = updateShapeBlocks[block];
      if (piece.y === rowNumber) { piece.y = -100, piece.x = -100 }
      }
    }
  this.score += 150;
  this.moveBlocksAboveDown(rowNumber);
};

Board.prototype.moveBlocksAboveDown = function(rowNumber) {
  debugger;
  for (let block of this.pieces) {
    if (block.y < rowNumber) { block.moveDown(); }
  }
};

Board.prototype.currentShapeNotOnBottom = function(currentShape) {
  currentShape.piece.shape[4].y < this.rows &&
  currentShape.piece.shape[3].y < this.rows &&
  currentShape.piece.shape[2].y < this.rows &&
  currentShape.piece.shape[1].y < this.rows
};

module.exports = Board;
