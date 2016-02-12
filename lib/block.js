var util = require('util');
var EventEmitter = require('events');
util.inherits(Block, EventEmitter);

function Block(board, x = 0, y = 0) {
  this.board = board;
  this.active = true;
  this.x = x;
  this.y = y;

  this.canMoveRight = this.canMove.bind(this, this.blockIsAtRightSideOfBoard, this.isThereABlockOnTheRight);
  this.canMoveLeft  = this.canMove.bind(this, this.blockIsAtLeftSideOfBoard, this.isThereABlockOnTheLeft);
  this.canMoveDown  = this.canMove.bind(this, this.blockIsAtBottomOfBoard, this.isThereABlockBelow);
  
  this.blockIsAtBottomOfBoard    = this.isAt.bind(this, +1, compareGreater);
  this.blockIsAtLeftSideOfBoard  = this.isAt.bind(this, -1, compareLess);
  this.blockIsAtRightSideOfBoard = this.isAt.bind(this, +1, compareGreater);
  this.isThereABlockOnTheRight   = this.onBottom.bind(this, +1, 0);
  this.isThereABlockOnTheLeft    = this.onBottom.bind(this, -1, 0);
  this.isThereABlockBelow        = this.onBottom.bind(this, 0, +1);

  if (this.canMoveDown)  this.moveDown   = this.move.bind(this, 0, +1);
  if (this.canMoveLeft)  this.moveLeft   = this.move.bind(this, -1, 0);
  if (this.canMoveRight) this.moveRight  = this.move.bind(this, +1, 0);
};

Block.prototype.isAt = function(offset, comparison) {
  return comparison((this.y + offset),(this.board.rows));
};

var compareLess = function(a,b) {
  return a < b;
}

var compareGreater = function(a,b) {
  return a > b;
}

Block.prototype.move = function (xOffset, yOffset) {
  this.x += xOffset;
  this.y += yOffset;
  return this
};

Block.prototype.onBottom = function ( xOffset, yOffset){
  if (this.board.findBlockOnBoard(this.x + xOffset, this.y + yOffset)) { return true }
}

Block.prototype.inactive = function() {
  return this.active = false;
};

Block.prototype.canMove = function(blockIsAt, isThereA){
  if (this.inactive) { return this.active = false }
  // check conditionals below to confirm falling block moves correctly
  if (this.blockisAt) { return this.inactive }
  if (this.isThereA) { return false }
};

module.exports = Block;


// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');

// Block.prototype.draw = function (context) {
//   context.fillRect(this.x, this.y, this.width, this.height);
//   return this;
// };

// animation of blocks here
// var blocks = [];
// blocks.push(new Block(300, 10));

// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, this.board.width, this.board.height);
//   blocks.forEach(function (block) {
//       block.draw(context).moveDown();
//   });
//   requestAnimationFrame(gameLoop);
// });
