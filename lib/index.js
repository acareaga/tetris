"use strict";

let canvas  = document.getElementById('game');
let context = canvas.getContext('2d');
let $       = require('jQuery');

let Board  = require('./board');
let Block  = require('./block');
let Shape  = require('./shape');
let zShape = require('./shapes/zShape');
let sShape = require('./shapes/sShape');

let board = new Board;
let piece = new zShape(board);
let block = new Block;
let shape = new Shape(piece);
board.addBlockToBoard(shape);

$(document).ready(function(){
  drawBoard();
});

function drawBoard() {
  requestAnimationFrame(function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // add border to canvas and block
    context.lineWidth = 2;
    context.strokeStyle="#000000";
    context.strokeRect(0, 0, canvas.width, canvas.height);

    board.draw(context);

    if (board.pieces[0].piece.shape[1].y < board.rows) {
      board.pieces[0].moveShapeDown();
    }

    // if (board.pieces[0].piece.shape[1].active === false ){
    //   debugger;
    //   let piece = new sShape;
    //   let shape = new Shape(piece);
    //   board.addBlockToBoard(shape);
    // }


    // 1. get piece to fall
    // 2. get rando piece to drop when blocks inactive
    // 3. get piece to stack
    // 4. create game loop with key inputs (left, right, down, rotate)
    // 5. Add screens (start, pause, end screen)

    // collection.moveShapeDown();

    // move down loop until event triggers to inactive state
    // debugger;

    // requestAnimationFrame(gameLoop)

    setTimeout(function() { requestAnimationFrame(gameLoop) }, 200 )
  });
};
