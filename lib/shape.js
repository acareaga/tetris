var util = require('util');
var EventEmitter = require('events');
util.inherits(Shape, EventEmitter);
var _ = require('lodash');

function Shape(piece){
  this.piece = piece;
  this.active = true;
}

Shape.prototype.draw = function(context) {
  for (let block in this.piece.shape) {
    this.piece.shape[block].draw(context);
  }
};

Shape.prototype.canMoveDown = function(currentShape, board) {
  var inactiveBlocks = _.filter(board.pieces, function(inactiveShapes){
    return inactiveShapes.active === false;
  });

  function compareBlocks(inactiveX, inactiveY) {
    for(let block in currentShape.piece.shape) {
      var curX = currentShape.piece.shape[block].x;
      var curY = currentShape.piece.shape[block].y;
      if ( (curY + 1 === inactiveY) && (curX === inactiveX) ) {
        currentShape.active = false;
      }
    }
  }

  _.each(inactiveBlocks, function(shape){
    for(let block in shape.piece.shape){
      var inactiveX = shape.piece.shape[block].x;
      var inactiveY = shape.piece.shape[block].y;
      compareBlocks(inactiveX, inactiveY);
    }
  });
  
  if (currentShape.active === true) { return true ;}
};

Shape.prototype.moveShapeDown = function(){
  _.every(this.piece, function(blocks){
    _.every(blocks, function(block){
      return block.moveDown();
    });
  });
};

Shape.prototype.updateStatusInactive = function() {
  _.every(this.blocks, function(block){
    block.active = false;
  });
};

Shape.prototype.moveShapeRight = function(){
  _.every(this.piece, function(blocks){
    _.every(blocks, function(block){
      return block.moveRight();
    });
  });
};

Shape.prototype.moveShapeLeft = function(){
  _.every(this.piece, function(blocks){
     _.every(blocks, function(block){
      return block.moveLeft();
    });
  });
};

Shape.prototype.rotateShape = function(){
  var rotation = this.piece.rotation[this.piece.defaultRotation];
  _.map(this.piece.shape, function(block, index){
    block.x += rotation[Number(index)][0];
    block.y += rotation[Number(index)][1];
  });
  this.piece.defaultRotation += 1;
  if (this.piece.defaultRotation === 5) { this.piece.defaultRotation = 1; }
};

module.exports = Shape;
