var util = require('util');
var EventEmitter = require('events');
var Block = require('./block')
var iShape = require('./shapes/iShape.js')
util.inherits(Shape, EventEmitter);
var _ = require('lodash');

function Shape(piece){
  this.piece = piece

  // this.moveShapeDown = this.move.bind(this, 'moveDown()')
  // this.moveShapeRight = this.move.bind(this, block.moveRight())
  // this.moveShapeLeft = this.move.bind(this, block.moveLeft())
};

// Shape.prototype.move = function (direction) {
//   _.every(this.piece, function(blocks){
//     _.every(blocks, function(block){
//       return block.direction
//     })
//   })
// };

Shape.prototype.draw = function(context) {
  blocks.forEach(function(block, context){
    block.draw(context);
  })
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
