class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.row = 0;
    this.col = 0;
  }

  solve() {
    let totalPaths = 0;
    const recursive = (row, col, boardCopy) => {
      const boardLength = boardCopy.length - 1;
      if (row === boardLength && col === boardLength) {
        totalPaths++;
        return;
      }
      if (boardCopy.hasBeenVisited(row, col)) {
        return;
      }
      boardCopy.togglePiece(row, col);

      if (row !== boardLength) {
        recursive(
          row + 1,
          col,
          Object.assign(
            Object.create(Object.getPrototypeOf(boardCopy)),
            boardCopy
          )
        );
      }
      if (row !== 0) {
        recursive(
          row - 1,
          col,
          Object.assign(
            Object.create(Object.getPrototypeOf(boardCopy)),
            boardCopy
          )
        );
      }
      if (col !== boardLength) {
        recursive(
          row,
          col + 1,
          Object.assign(
            Object.create(Object.getPrototypeOf(boardCopy)),
            boardCopy
          )
        );
      }
      if (col !== 0) {
        recursive(
          row,
          col - 1,
          Object.assign(
            Object.create(Object.getPrototypeOf(boardCopy)),
            boardCopy
          )
        );
      }
    };

    recursive(
      0,
      0,
      Object.assign(
        Object.create(Object.getPrototypeOf(this.board)),
        this.board
      )
    );

    return totalPaths;
  }
}

module.exports = { RobotPaths };
