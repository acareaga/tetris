"use strict";

let canvas  = document.getElementById('game');
let context = canvas.getContext('2d');
let $       = require('jQuery');

let Board  = require('./board');
let Block  = require('./block');
let Shape  = require('./shape');
let zShape = require('./shapes/zShape');

let board = new Board;
let piece = new zShape;
let block = new Block;
let shape = new Shape(piece);
board.addBlockToBoard(shape);

$(document).ready(function(){
  drawBoard();
});

function drawBoard() {
  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    let collection = board.blocks.map(function (shape) {
      return shape.x.piece.shape
    })

    for (let blocks of collection) {
      blocks[1].draw(context);
      blocks[2].draw(context);
      blocks[3].draw(context);
      blocks[4].draw(context);
    };

    collection.moveShapeDown;

    // move down loop until event triggers to inactive state
    // debugger;

    requestAnimationFrame(gameLoop);
  });
};
