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
let shape = new Shape(piece);

$(document).ready(function(){
  drawBoard();
});

function drawBoard() {
  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // blocks.forEach(function (block) { block.draw().move(); });
    board = new Board
    board.addBlockToBoard(shape);
    board.generate(context);
    // requestAnimationFrame(gameLoop)
    setTimeout(function() { requestAnimationFrame(gameLoop) }, 100 )
  });
};
