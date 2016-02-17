"use strict";

let canvas  = document.getElementById('game');
let context = canvas.getContext('2d');
let $       = require('jQuery');

let Board  = require('./board');
let Block  = require('./block');
let Shape  = require('./shape');

let board = new Board;

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

    // generate shape and draw board
    board.generateShape();
    board.draw(context);

    // for each shape in the collection on the board
    _.every(board.pieces, function(shape){
      for (let block in shape.piece.shape) {
        if (shape.piece.shape[block].y === 20) { (shape.active = false) && (shape.piece.shape[block].active = false) }

        var blocksActive = _.any(shape.piece.shape[block].active, function(state){
          state === false
        });

        // blocks falling to bottom of canvas
        if (board.pieces[0].piece.shape[1].y < board.rows && !blocksActive) {
          shape.piece.shape[block].moveDown()
        }
      };
    });


    // move shape down if not at bottom
    // if (board.pieces[0].piece.shape[1].y < board.rows) {
    //   board.pieces[0].piece.shapeCanMoveDown();
    // }

    // 1. get piece to fall
    // 2. get rando piece to drop when blocks inactive
    // 3. get piece to stack
    // 4. create game loop with key inputs (left, right, down, rotate)
    // 5. Add screens (start, pause, end screen)

    requestAnimationFrame(gameLoop)
    // setTimeout(function() { requestAnimationFrame(gameLoop) }, 200 )
  });
};

// function userInput() { // keydown event
//   if (event === 32 ) { // space
//     board.startGame();
//   } elsif (event === 40) { // down arrow
//     block.canMoveDown();
//   } elsif ( event === 37) { // left arrow
//     block.canMoveLeft();
//   } elsif ( event === 39) { // right arrow
//     block.canMoveRight();
//   } elsif (event ===  38) { // up arrow
//     block.rotateShape();
//   } elsif (event === 27) { // escape key
//     board.endGame();
//   };
// };
