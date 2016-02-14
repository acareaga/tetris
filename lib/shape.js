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
  return  _.every(blocks, function(block){
      return block.moveDown()
    })
 })
};

Shape.prototype.moveShapeRight = function(){
  _.every(this.piece, function(blocks){
    return _.every(blocks, function(block){
      return block.moveRight()
    })
  })
};

Shape.prototype.moveShapeLeft = function(){
  _.every(this.piece, function(blocks){
    return _.every(blocks, function(block){
      return block.moveLeft()
    })
  })
};

Shape.prototype.rotateShape = function(){
  var rotation = this.piece.rotation[this.piece.defaultRotation]
  _.each(this.piece.shape, function(block, index){
    block.y = rotation[index][0];
    block.x = rotation[index][1];
  })
};
module.exports = Shape;
