"use strict";
/*jshint -W079 */
/*jshint -W117 */

let canvas  = document.getElementById('game');
let context = canvas.getContext('2d');
let $       = require('jQuery');
let Board  = require('./board');
let board = new Board();
let currentShape = board.pieces[0];

$(document).ready(function(){
  userInput();
  emptyBoard();
});

$('.score').text(board.score);

function emptyBoard() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = 2;
  context.strokeStyle= "#000000";
  context.strokeRect(0, 0, canvas.width, canvas.height);
}

function drawBoard() {
  requestAnimationFrame(function gameLoop() {

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 2;
    context.strokeStyle= "#000000";
    context.strokeRect(0, 0, canvas.width, canvas.height);
    board.draw(context);

    if (!currentShape || currentShape.active === false) {
      // generate rando shape
      currentShape = board.generateShape();
    } else {

        // move shape down if blocks are above bottom row height
          if (currentShape.piece.shape[4].y < board.rows &&
              currentShape.piece.shape[3].y < board.rows &&
              currentShape.piece.shape[2].y < board.rows &&
              currentShape.piece.shape[1].y < board.rows) {

            if ( currentShape.canMoveDown(currentShape, board) ) {
              currentShape.moveShapeDown();
            }

        } else {
                // change the shape status to false
                currentShape.active = false;
                _.each(currentShape.piece.shape, function(block) {
                  block.active = false;
                });
                // drop a new shape after the status is changed to inactive
                currentShape = board.generateShape();
              }
      }
      if (
           (currentShape.piece.shape[4].y === 0 && currentShape.active === false) ||
           (currentShape.piece.shape[3].y === 0 && currentShape.active === false) ||
           (currentShape.piece.shape[1].y === 0 && currentShape.active === false) ||
           (currentShape.piece.shape[1].y === 0 && currentShape.active === false) ){
             currentShape = [] &&
             $('.gameOver').text("Game Over!");
           }

    setTimeout(function() { requestAnimationFrame(gameLoop); }, 200 );
  });
}

function everBlock(shape,blockNumber, number, arrayOfTruth){
 if (blockNumber > 0){
 arrayOfTruth.push(shape[blockNumber].x < number )
 return everyBlock(shape, blockNumber - 1, number, arrayOfTruth);
  }else{
    return arrayOfTruth
  }
}

function userInput() {
  $(document).keydown( function(event){
    var arrayOfTruth = []
    if ( event.keyCode === 37) {
      var shape = currentShape.piece.shape
      everyBlock(shape, 4, 0,arrayOfTruth) // left arrow
      if (.arrayOfTruth.every(item => item === true )){
            currentShape.moveShapeLeft();
          }
    } else if ( event.keyCode === 39) { // right arrow
      var shape = currentShape.piece.shape
      everyBlock(shape, 4, 20,arrayOfTruth)
      if (arrayOfTruth.every(item => item === true )){
            currentShape.moveShapeRight();
          }
    } else if (event.keyCode ===  38) { // up arrow
      currentShape.rotateShape();
    } else if (event.keyCode ===  32) { // space bar
      drawBoard();
    }
  });
}
