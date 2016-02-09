// Get a Block model up and running with movement and movement detection

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Block(x, y) {
  this.x = x;
  this.y = y;
  this.width = 25;
  this.height = 25;
};

Block.prototype.moveDown = function() {
  if (this.y < canvas.height - this.height) {
    this.y++;
  } else {
    this.y = canvas.height - this.height;
  }
  return this;
};

Block.prototype.draw = function (context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

// creation of blocks here
var blocks = [];
blocks.push(new Block(300, 10));

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  blocks.forEach(function (block) {
      block.draw(context).moveDown();
  });
  requestAnimationFrame(gameLoop);
});

module.exports = Block;
