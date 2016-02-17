"use strict";

let canvas  = document.getElementById('game');
let context = canvas.getContext('2d');
let $       = require('jQuery');

let Board  = require('./board');

let board = new Board();
let currentShape = board.pieces[0];

$(document).ready(function(){
  drawBoard();
});

function drawBoard() {
  requestAnimationFrame(function gameLoop() {
    // add border to canvas and block
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 2;
    context.strokeStyle= "#000000";
    context.strokeRect(0, 0, canvas.width, canvas.height);

    // draw board
    board.draw(context);

// /////
//     currentShape = board.generateShape();
//     board.findBlockOnBoard(currentShape.piece.shape[1].x, currentShape.piece.shape[1].y);
// //////


    if (!currentShape) {
      // generate rando shape
      currentShape = board.generateShape();
    } else {

      // NEED TO ADD A FUNCTION TO CHECK IF EACH BLOCK IN THE SHAPE CAN MOVE DOWN ON -IF-



      // move shape down if blocks are above bottom row height
      if ( currentShape.piece.shape[1].y < board.rows ) {
          currentShape.moveShapeDown();
      } else {

        // change the shape status to false
        currentShape.active = false;
        // change the shape status to false
        _.every(currentShape.piece.shape, function(block) {
          block.active = false;
        });
        // drop a new shape after the status is changed to inactive
        currentShape = board.generateShape();
      }
    }

    // 1. get piece to fall
    // 2. get rando piece to drop when blocks inactive
    // 3. get piece to stack
    // 4. create game loop with key inputs (left, right, down, rotate)
    // 5. Add screens (start, pause, end screen)

    // requestAnimationFrame(gameLoop);
    setTimeout(function() { requestAnimationFrame(gameLoop); }, 200 );
  });
}

// $(document).keydown(function(event){
//   if (event.keyCode === 32 ) { // space
//     board.startGame();
//   } else if (event.keyCode === 40) { // down arrow
//     block.canMoveDown();
//   } else if ( event.keyCode === 37) { // left arrow
//     block.canMoveLeft();
//   } else if ( event.keyCode === 39) { // right arrow
//     block.canMoveRight();
//   } else if (event.keyCode ===  38) { // up arrow
//     block.rotateShape();
//   } else if (event.keyCode === 27) { // escape key
//     board.endGame();
//   };
// });
