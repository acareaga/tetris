var util = require('util');
var EventEmitter = require('events');
var Block = require('./block');
util.inherits(Board, EventEmitter);
var _ = require('lodash');

function Board(columns = 10, rows = 20) {
  this.columns        = columns;
  this.rows           = rows;
  this.pieces         = [];
  this.score          = 0;
  this.rowBlockCount  = { 1: 0, 2: 0, 3: 0,
                          4: 0, 5: 0, 6: 0,
                          7: 0, 8: 0, 9: 0,
                          10: 0, 11: 0, 12: 0,
                          13: 0, 14: 0, 15: 0,
                          16: 0, 17: 0, 18: 0,
                          19: 0, 20: 0
                        };
};

Board.prototype.draw = function (context) {
  _.each(this.pieces, function(shape){
    shape.draw(context)
  });
};

Board.prototype.generate = function(context) {
  context.fillRect(this.rows, this.columns, this.blocks);
  _.each(this.blocks, function(block){
    context.fillRect(block.x, block.y, 5, 5);
  });
};

Board.prototype.addBlockToBoard = function(shape) {
  this.pieces.push(shape);
  return shape;
};

Board.prototype.findBlockOnBoard = function(x, y) {
  for (let block of this.blocks) {
    if (block.x === x && block.y === y) { return block }
  };
};

Board.prototype.rowChecker = function() {
  for (let block of this.blocks) {
    this.rowBlockCount[block.y] += 1;
    if (this.rowBlockCount[block.y] === 10) {this.clearRow(block.y) }
  };
};

Board.prototype.clearRow = function(rowNumber) {
  this.blocks = _.reject(this.blocks, function(block){
    return block.y === rowNumber;
  });
  this.score += 1;
  this.moveBlocksAboveDown(rowNumber);
};

Board.prototype.moveBlocksAboveDown = function(rowNumber) {
  for (let block of this.blocks) {
    if (block.y < rowNumber) { block.moveDown() }
  };
};

module.exports = Board;
