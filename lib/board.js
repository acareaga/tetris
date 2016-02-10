// Get a Board model up and running with rows, columns, and a collection of blocks

function Board(x, y) {
  this.x = x;
  this.y = y;
  this.width = 25;
  this.height = 25;
};

module.exports = Board;
