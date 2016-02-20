# TETRIS

[Play the Game](https://acareaga.github.io/tetris/)

## Description

Tetris was built by [Jhun de Andres](https://twitter.com/joshuajhun) & [Aaron Careaga](https://twitter.com/aaroncareaga) for the Game Time project in Module 4 at the Turing School. The game was implemented entirely in Javascript and jQuery using Lodash and HTML5 canvas.

![Tetris Turing School Jhun de Andres Aaron Careaga](http://www.aaroncareaga.com/wp-content/uploads/2016/02/Screen-Shot-2016-02-19-at-8.42.24-PM.png)

## Installation

Clone repository and install dependencies:

```
$ git clone git@github.com:acareaga/tetris.git
$ cd tetris
$ npm install
```

## Usage

Fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run the application.
* `http://localhost:8080/webpack-dev-server/test.html` to run the test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```

## Insight


We chose to build Tetris to better understand object oriented JavaScript and push our Mocha testing abilities. With 3 models, 7 pieces, and 4 rotations, the logic behind the game was really difficult. A few sections of the codebase we are most proud of include the use of higher order functions, significant unit level test coverage, object oriented design, and navigating deeply nested objects.

### Partial Functions & Refactoring the Block Model

Tetris is entirely built of single blocks. Each shape is comprised of four blocks that shift coordinates on the board grid. To stack shapes and clear rows on the grid, each block must detect the collection it's within relative to other pieces. 

Functions to move the block down, left, and right must first check whether the space is available. A lot of the logic is repetitive given you are just addiing or subtracting one from each block's X or Y value. 

For example:

```
Block.prototype.moveDown = function() {
  if (this.canMoveDown) { this.y++ };
  return this;
};
  
Block.prototype.moveRight = function() {
  if (this.canMoveRight) { this.x++ };
  return this;
};
  
Block.prototype.moveLeft = function() {
  if (this.canMoveLeft) { this.x-- };
  return this;
};
```

Using partial functions, we were able to refactor the code from 18 movement related functions down to 6. This allowed us to future-proof the model from bugs when the grid size changed.


```
function Block(board, x = 5, y = 5, color = "#000000") {
  this.board  = board;
  this.active = true;
  this.x = x;
  this.y = y;
  this.height = 1;
  this.width = 1;
  this.color = color;

  this.canMoveRight = this.canMove.bind(this, this.blockIsAtRightSideOfBoard, this.isThereABlockOnTheRight);
  this.canMoveLeft  = this.canMove.bind(this, this.blockIsAtLeftSideOfBoard, this.isThereABlockOnTheLeft);
  this.canMoveDown  = this.canMove.bind(this, this.blockIsAtBottomOfBoard, this.isThereABlockBelow);

  this.blockIsAtBottomOfBoard    = this.isAt.bind(this, +1, compareGreater);
  this.blockIsAtLeftSideOfBoard  = this.isAt.bind(this, -1, compareLess);
  this.blockIsAtRightSideOfBoard = this.isAt.bind(this, +1, compareGreater);
  this.isThereABlockOnTheRight   = this.onBottom.bind(this, +1, 0);
  this.isThereABlockOnTheLeft    = this.onBottom.bind(this, -1, 0);
  this.isThereABlockBelow        = this.onBottom.bind(this, 0, +1);

  if (this.canMoveDown)  {this.moveDown  = this.move.bind(this, 0, +1);}
  if (this.canMoveLeft)  {this.moveLeft  = this.move.bind(this, -1, 0);}
  if (this.canMoveRight) {this.moveRight = this.move.bind(this, +1, 0);}
}
```


## License

Our Tetris codebase is released under the [MIT License](http://www.opensource.org/licenses/MIT).
