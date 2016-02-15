var util = require('util');
var EventEmitter = require('events');
util.inherits(Shape, EventEmitter);
var Block = require('./block')
var iShape = require('./shapes/iShape.js')
var _ = require('lodash');

function Shape(piece){
  this.piece = piece
};

Shape.prototype.moveShapeDown = function(){
  _.every(this.piece, function(blocks){
    _.every(blocks, function(block){
      return block.moveDown()
    })
 })
};

Shape.prototype.moveShapeRight = function(){
  _.every(this.piece, function(blocks){
    _.every(blocks, function(block){
      return block.moveRight()
    })
  })
};

Shape.prototype.moveShapeLeft = function(){
  _.every(this.piece, function(blocks){
     _.every(blocks, function(block){
      return block.moveLeft()
    })
  })
};

Shape.prototype.rotateShape = function(){
  var rotation = this.piece.rotation[this.piece.defaultRotation]
  _.map(this.piece.shape, function(block, index){
    block.x += rotation[Number(index)][0];
    block.y += rotation[Number(index)][1];
  })
  this.piece.defaultRotation += 1
  if (this.piece.defaultRotation === 5) { this.piece.defaultRotation = 1 }
};
module.exports = Shape;
