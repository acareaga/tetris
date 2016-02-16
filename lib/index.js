"use strict";

let canvas  = document.getElementById('game');
let context = canvas.getContext('2d');
let $       = require('jQuery');

let Board  = require('./board');
let Block  = require('./block');
let Shape  = require('./shape');
let iShape = require('./shapes/iShape');

let board = new Board;
let piece = new iShape;
let block = new Block;
let shape = new Shape(piece);
board.addBlockToBoard(shape);

$(document).ready(function(){
  drawBoard();
});

function drawBoard() {
  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    let collection = board.blocks.map(function (shape){
      return shape.x.piece.shape
    })

    for (let blocks of collection) {
      context.fillRect(blocks[1].x, blocks[1].y, blocks[1].height, blocks[1].width)
    };

    requestAnimationFrame(gameLoop);
  });
};
