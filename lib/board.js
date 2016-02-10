// Get a Board model up and running with rows, columns, and a collection of blocks
import { EventEmitter } from 'events';
class Board extends EventEmitter{
  constructor(columns =10, rows = 20)
  this.columns = columns
  this.rows    = rows
  this.blocks  = []
  }

  // we need to add a function that will then let us add blocks with an emitter that will be triggered when the block is rendered inactive
  // we need a function that returns the position of the block based on that event.
  // we need a function that checks ifi the rows on the board are completed
  
}
