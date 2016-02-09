var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Piece(x, y) {
  this.x = x;
  this.y = y;
  this.width = 25;
  this.height = 25;
}

Piece.prototype.moveDown = function() {
  if (this.y < canvas.height) {
    this.y++;
  } else {
    this.y = 0 - this.height;
  }
  return this;
}

Piece.prototype.draw = function (context) {
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
}

var pieces = [];

for (var x = 0; x < canvas.width; x = x + 30) {
  pieces.push(new Piece(x, 10));
}

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(function (piece) {
    piece.draw(context).moveDown();
  });
  requestAnimationFrame(gameLoop);
});

module.exports = Piece;
