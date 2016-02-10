// Get a Block model up and running with movement and movement detection
// we need to change this to be in the context of the board.

// var canvas = document.getElementById('game');
// var context = canvas.getContext('2d');

var util = require('util');
var EventEmitter = require('events');
util.inherits(Block, EventEmitter);

function Block(board, x = 0, y = 0) {
  this.board = board;
  this.x = x;
  this.y = y;
  this.active = true;
  this.board.blocks.push(this);
};

Block.prototype.moveDown = function() {
  this.y++;
  return this;
};

// move left with arrow
Block.prototype.moveRight = function() {
  this.x++
  return this;
};

// move left with arrow
Block.prototype.moveLeft = function() {
  this.x--
  return this;
};

Block.prototype.inactive = function() {
  return this.active = false
};

// check the position of the block on the board
Block.prototype.blockIsAtBottomOfBoard = function() {
  return this.y + 1 > this.board.rows
};

Block.prototype.blockIsAtLeftSideOfBoard = function() {
  return this.x - 1 < this.board.columns
};

Block.prototype.blockIsAtRightSideOfBoard = function() {
  return this.x + 1 > this.board.columns
};

// check whether the block can move left, right, or down on board

// create a method that communicates we can no longer move
// down any further.
Block.prototype.canMoveDown = function() {
  if (this.inactive){ return this.active = false }
  if (this.blockIsAtBottomOfBoard){ return this.inactive }
};

Block.prototype.canMoveLeft = function(){
  if (this.inactive){ return this.active = false}
  if (this.blockIsAtLeftSideOfBoard){return this.inactive}
};

Block.prototype.canMoveRight = function(){
  if (this.inactive){ return this.active = false}
  if (this.blockIsAtRightSideOfBoard){return this.inactive}
};

module.exports = Block;





// Block.prototype.draw = function (context) {
//   context.fillRect(this.x, this.y, this.width, this.height);
//   return this;
// };

// animation of blocks here
// var blocks = [];
// blocks.push(new Block(300, 10));
//
// requestAnimationFrame(function gameLoop() {
//   context.clearRect(0, 0, this.board.width, this.board.height);
//   blocks.forEach(function (block) {
//       block.draw(context).moveDown();
//   });
//   requestAnimationFrame(gameLoop);
// });
