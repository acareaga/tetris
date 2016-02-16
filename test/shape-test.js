var assert = require('chai').assert;
var Block = require('../lib/block');
var Board = require('../lib/board');
var iShape = require('../lib/shapes/iShape.js');
var jShape = require('../lib/shapes/jShape.js');
var lShape = require('../lib/shapes/lShape.js');
var oShape = require('../lib/shapes/oShape.js');
var sShape = require('../lib/shapes/sShape.js');
var tShape = require('../lib/shapes/tShape.js');
var zShape = require('../lib/shapes/zShape.js');
var Shape = require('../lib/shape');

describe('Game Shapes', function(){
  beforeEach(function () {
    this.board = new Board();
  });

it('You can add a shape to the board', function(){
  let shape = new iShape
  this.board.addBlockToBoard(shape)
  assert.equal(this.board.blocks.length, 1 )
});

it('iShape can move down',function(){
  let ishape = new iShape //collection of blocks
  let shape = new Shape(ishape) //gobo

  this.board.addBlockToBoard(shape)// adding shape to board
  shape.moveShapeDown()

  let firstBlockOnPiece = this.board.blocks[0].x.piece.shape[1]

  assert.equal(firstBlockOnPiece.y, 1)
});

it('iShape can move to the right', function(){
  let ishape = new iShape

  let shape = new Shape(ishape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeRight()

  let firstBlockOnPiece = this.board.blocks[0].x.piece.shape[1]

  assert.equal(firstBlockOnPiece.x, 2)
});

it('iShape can move left on the board', function(){
  let ishape = new iShape
  let shape  = new Shape(ishape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeLeft()
  let firstBlockOnPiece = this.board.blocks[0].x.piece.shape[1]
  assert.equal(firstBlockOnPiece.y, 0)
});

xit('iShape can change positions', function(){
  let ishape = new iShape
  let shape = new Shape(ishape)

  this.board.addBlockToBoard(shape)

  shape.rotateShape()
  let firstBlockOnPiece = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]

  assert.equal(firstBlockOnPiece.x,0 )
  assert.equal(firstBlockOnPiece.y,1 )
  assert.equal(secondBlockOnPiece.x,0 )
  assert.equal(secondBlockOnPiece.y,2 )
  assert.equal(thirdBlockOnPiece.x,0 )
  assert.equal(thirdBlockOnPiece.y,3 )
  assert.equal(fourthBlockOnPiece.x,0 )
  assert.equal(fourthBlockOnPiece.y,4 )

});
/////
it('jShape can move down',function(){
  let jshape = new jShape //collection of blocks

  let shape = new Shape(jshape) //gobo

  this.board.addBlockToBoard(shape)// adding shape to board

  shape.moveShapeDown()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.y, 1)
  assert.equal(secondBlockOnPiece.y, 2)
  assert.equal(thirdBlockOnPiece.y, 2)
  assert.equal(fourthBlockOnPiece.y, 2)
});

it('jShape can move to the right', function(){
  let jshape = new jShape
  let shape = new Shape(jshape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeRight()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.x, 7)
  assert.equal(secondBlockOnPiece.x, 7)
  assert.equal(thirdBlockOnPiece.x, 6)
  assert.equal(fourthBlockOnPiece.x, 5)
});

it('jShape can move left on the board', function(){
  let jshape = new jShape
  let shape  = new Shape(jshape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeLeft()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.x, 5)
  assert.equal(secondBlockOnPiece.x, 5)
  assert.equal(thirdBlockOnPiece.x, 4)
  assert.equal(fourthBlockOnPiece.x, 3)
});

xit('jShape can change to first rotation', function(){
  let jshape = new jShape
  let shape = new Shape(jshape)

  this.board.addBlockToBoard(shape)
  shape.rotateShape()


  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]

  assert.equal(firstBlockOnPiece.x, 4)
  assert.equal(firstBlockOnPiece.y, 0)
  assert.equal(secondBlockOnPiece.x, 5)
  assert.equal(secondBlockOnPiece.y, 0)
  assert.equal(thirdBlockOnPiece.x, 5)
  assert.equal(thirdBlockOnPiece.y, 1)
  assert.equal(fourthBlockOnPiece.x, 5)
  assert.equal(fourthBlockOnPiece.y, 2)

});

xit('jShape can change to second rotation ', function(){
  let jshape = new jShape
  let shape = new Shape(jshape)

  this.board.addBlockToBoard(shape)
  shape.rotateShape()
  shape.rotateShape()


  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]

  assert.equal(firstBlockOnPiece.x, 4)
  assert.equal(firstBlockOnPiece.y, 1)
  assert.equal(secondBlockOnPiece.x, 4)
  assert.equal(secondBlockOnPiece.y, 0)
  assert.equal(thirdBlockOnPiece.x, 5)
  assert.equal(thirdBlockOnPiece.y, 0)
  assert.equal(fourthBlockOnPiece.x, 6)
  assert.equal(fourthBlockOnPiece.y, 0)

});

xit('jShape can change to third rotation ', function(){
  let jshape = new jShape
  let shape = new Shape(jshape)

  this.board.addBlockToBoard(shape)
  shape.rotateShape()
  shape.rotateShape()
  shape.rotateShape()


  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]

  assert.equal(firstBlockOnPiece.x, 6)
  assert.equal(firstBlockOnPiece.y, 2)
  assert.equal(secondBlockOnPiece.x, 5)
  assert.equal(secondBlockOnPiece.y, 2)
  assert.equal(thirdBlockOnPiece.x, 5)
  assert.equal(thirdBlockOnPiece.y, 1)
  assert.equal(fourthBlockOnPiece.x, 5)
  assert.equal(fourthBlockOnPiece.y, 0)

});

xit('jShape can change to fouth rotation ', function(){
  let jshape = new jShape
  let shape = new Shape(jshape)

  this.board.addBlockToBoard(shape)
  shape.rotateShape()
  shape.rotateShape()
  shape.rotateShape()
  shape.rotateShape()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]

  assert.equal(firstBlockOnPiece.x, 6)
  assert.equal(firstBlockOnPiece.y, 0)
  assert.equal(secondBlockOnPiece.x, 6)
  assert.equal(secondBlockOnPiece.y, 1)
  assert.equal(thirdBlockOnPiece.x, 5)
  assert.equal(thirdBlockOnPiece.y, 1)
  assert.equal(fourthBlockOnPiece.x, 4)
  assert.equal(fourthBlockOnPiece.y, 1)
});

it('jShape can change counter resets to default rotation after being called 5 times ', function(){
  let jshape = new jShape
  let shape = new Shape(jshape)

  this.board.addBlockToBoard(shape)
  shape.rotateShape()
  shape.rotateShape()
  shape.rotateShape()
  shape.rotateShape()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]

  assert.equal(firstBlockOnPiece.x, 6)
  assert.equal(firstBlockOnPiece.y, 0)
  assert.equal(secondBlockOnPiece.x, 6)
  assert.equal(secondBlockOnPiece.y, 1)
  assert.equal(thirdBlockOnPiece.x, 5)
  assert.equal(thirdBlockOnPiece.y, 1)
  assert.equal(fourthBlockOnPiece.x, 4)
  assert.equal(fourthBlockOnPiece.y, 1)

  assert.equal(shape.piece.defaultRotation, 1)
});

it('jShape can change counter resets to default rotation after being called 5 times ', function(){
  let jshape = new jShape
  let shape = new Shape(jshape)

  this.board.addBlockToBoard(shape)
  shape.rotateShape()
  shape.rotateShape()
  shape.rotateShape()
  shape.rotateShape()

  assert.equal(shape.piece.defaultRotation, 1)
});




//////////////////////////////////////////
it('lShape can move down',function(){
  let lshape = new lShape //collection of blocks

  let shape = new Shape(lshape) //gobo

  this.board.addBlockToBoard(shape)// adding shape to board

  shape.moveShapeDown()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.y, 1)
  assert.equal(secondBlockOnPiece.y, 2)
  assert.equal(thirdBlockOnPiece.y, 2)
  assert.equal(fourthBlockOnPiece.y, 2)
});

it('lShape can move to the right', function(){
  let lshape = new lShape
  let shape = new Shape(lshape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeRight()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.x, 5)
  assert.equal(secondBlockOnPiece.x, 5)
  assert.equal(thirdBlockOnPiece.x, 6)
  assert.equal(fourthBlockOnPiece.x, 7)
});

it('lShape can move left on the board', function(){
  let lshape = new lShape
  let shape  = new Shape(lshape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeLeft()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.x, 3)
  assert.equal(secondBlockOnPiece.x, 3)
  assert.equal(thirdBlockOnPiece.x, 4)
  assert.equal(fourthBlockOnPiece.x, 5)
});
////////////////////////////////////
it('oShape can move down',function(){
  let oshape = new oShape //collection of blocks

  let shape = new Shape(oshape) //gobo

  this.board.addBlockToBoard(shape)// adding shape to board

  shape.moveShapeDown()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.y, 1)
  assert.equal(secondBlockOnPiece.y, 1)
  assert.equal(thirdBlockOnPiece.y, 2)
  assert.equal(fourthBlockOnPiece.y, 2)
});

it('oShape can move to the right', function(){
  let oshape = new oShape
  let shape = new Shape(oshape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeRight()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.x, 5)
  assert.equal(secondBlockOnPiece.x, 6)
  assert.equal(thirdBlockOnPiece.x, 5)
  assert.equal(fourthBlockOnPiece.x, 6)
});

it('oShape can move left on the board', function(){
  let oshape = new oShape
  let shape  = new Shape(oshape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeLeft()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.x, 3)
  assert.equal(secondBlockOnPiece.x, 4)
  assert.equal(thirdBlockOnPiece.x, 3)
  assert.equal(fourthBlockOnPiece.x, 4)
});
///////////////////////////////////////////////
it('sShape can move down',function(){
  let sshape = new sShape

  let shape = new Shape(sshape)

  this.board.addBlockToBoard(shape)

  shape.moveShapeDown()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.y, 2)
  assert.equal(secondBlockOnPiece.y, 2)
  assert.equal(thirdBlockOnPiece.y, 1)
  assert.equal(fourthBlockOnPiece.y, 1)
});

it('sShape can move to the right', function(){
  let sshape = new sShape
  let shape = new Shape(sshape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeRight()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.x, 7)
  assert.equal(secondBlockOnPiece.x, 6)
  assert.equal(thirdBlockOnPiece.x, 6)
  assert.equal(fourthBlockOnPiece.x, 5)
});

it('sShape can move left on the board', function(){
  let sshape = new sShape
  let shape  = new Shape(sshape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeLeft()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.x, 5)
  assert.equal(secondBlockOnPiece.x, 4)
  assert.equal(thirdBlockOnPiece.x, 4)
  assert.equal(fourthBlockOnPiece.x, 3)
});
///////////////////////////////////////////
it('zShape can move down',function(){
  let zshape = new zShape

  let shape = new Shape(zshape)

  this.board.addBlockToBoard(shape)

  shape.moveShapeDown()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.y, 2)
  assert.equal(secondBlockOnPiece.y, 2)
  assert.equal(thirdBlockOnPiece.y, 1)
  assert.equal(fourthBlockOnPiece.y, 1)
});

it('zShape can move to the right', function(){
  let zshape = new zShape
  let shape = new Shape(zshape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeRight()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.x, 5)
  assert.equal(secondBlockOnPiece.x, 6)
  assert.equal(thirdBlockOnPiece.x, 6)
  assert.equal(fourthBlockOnPiece.x, 7)
});

it('zShape can move left on the board', function(){
  let zshape = new zShape
  let shape  = new Shape(zshape)
  this.board.addBlockToBoard(shape)

  shape.moveShapeLeft()

  let firstBlockOnPiece  = shape.piece.shape[1]
  let secondBlockOnPiece = shape.piece.shape[2]
  let thirdBlockOnPiece  = shape.piece.shape[3]
  let fourthBlockOnPiece = shape.piece.shape[4]


  assert.equal(firstBlockOnPiece.x, 3)
  assert.equal(secondBlockOnPiece.x, 4)
  assert.equal(thirdBlockOnPiece.x, 4)
  assert.equal(fourthBlockOnPiece.x, 5)
})

})
