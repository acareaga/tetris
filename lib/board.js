// Get a Board model up and running with rows, columns, and a collection of blocks
import EventEmitter from 'events';
import Block from './block';

class Board extends EventEmitter {
  constructor(columns = 10, rows = 20) {
    super()
    this.columns = columns
    this.rows    = rows
    this.blocks  = []
  };

  addBlockToBoard(x, y) {
    let block = new Block(this, x, y);
    this.blocks.push(block);
    return block;
  };

  findBlockOnBoard(x, y) {
    for (let block of this.blocks) {
      if (block.x === x && block.y === y) { return block; }
    }
  };

  checkIfRowIsFull() {
    // we need a function that checks ifi the rows on the board are completed
  };

  // we need to add a function that will then let us add blocks with an emitter that will be triggered when the block is rendered inactive
  // we need a function that returns the position of the block based on that event.
};

export default Board;
