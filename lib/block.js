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
  if (this.y < this.board.height - this.height) {
    this.y++;
  } else {
    this.y = this.board.height - this.height;
  }
  return this;
};

// move left with arrow
Block.prototype.moveRight = function() {
  if (this.x < this.board.width - this.width) {
    this.x++;
  } else {
    this.x = this.board.width - this.width;
  }
  return this;
};

// move left with arrow
Block.prototype.moveLeft = function() {
  if (this.x < this.board.width - this.width) {
    this.x--;
  } else {
    this.x = this.board.width - this.width;
  }
  return this;
};

Block.prototype.draw = function (context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

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

module.exports = Block;
