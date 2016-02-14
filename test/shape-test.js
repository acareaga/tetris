var assert = require('chai').assert;
var Block = require('../lib/block');
var Board = require('../lib/board');
var iShape = require('../lib/shapes/iShape.js');
var Shape = require('../lib/shape');

describe('Game Shapes', function(){
  beforeEach(function () {
    this.board = new Board();
  });

xit('You can add a shape to the board', function(){
  let shape = new iShape
  this.board.addBlockToBoard(shape)
  assert.equal(this.board.blocks.length, 1 )
});

xit('can move down',function(){
  let ishape = new iShape //collection of blocks

  let shape = new Shape(ishape) //gobo

  this.board.addBlockToBoard(shape)// adding shape to board

  shape.moveShapeDown()

  let firstBlockOnPiece = this.board.blocks[0].x.piece.shape[1]

  assert.equal(firstBlockOnPiece.y, 1)
});

xit('can move to the right', function(){
  let ishape = new iShape

  let shape = new Shape(ishape)

  this.board.addBlockToBoard(shape)

  shape.moveShapeRight()

  let firstBlockOnPiece = this.board.blocks[0].x.piece.shape[1]

  assert.equal(firstBlockOnPiece.x, 2)
});

xit('can current cant move left on the board', function(){
  let ishape = new iShape
  let shape  = new Shape(ishape)
  this.board.addBlockToBoard(shape)
  shape.moveShapeLeft()
  let firstBlockOnPiece = this.board.blocks[0].x.piece.shape[1]
  assert.equal(firstBlockOnPiece.y,0 )
});

it('can change positions', function(){
  let ishape = new iShape
  let shape = new Shape(ishape)

  this.board.addBlockToBoard(shape)
  shape.rotateShape()
  let firstBlockOnPiece = shape.piece.shape[1]
  assert.equal(firstBlockOnPiece.y,1 )
});
})
