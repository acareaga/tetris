var util = require('util');
var EventEmitter = require('events');
var Block = require('./block');
var Board = require('./board');
var Shape = require('./shape');

function Game () {

};

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

util.inherits(Game, EventEmitter);
module.exports = Game;
