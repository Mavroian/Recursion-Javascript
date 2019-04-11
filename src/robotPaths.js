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
    const countPaths = (row, col) => {
      const boardLength = this.board.board.length;
      if (row === boardLength - 1 && col === boardLength - 1) {
        totalPaths++;
        return;
      }
      if (row < 0 || row >= boardLength || col < 0 || col >= boardLength) {
        return;
      }
      if (this.board.hasBeenVisited(row, col)) {
        return;
      }
      this.board.togglePiece(row, col);
      countPaths(row, col + 1);
      countPaths(row + 1, col);
      countPaths(row, col - 1);
      countPaths(row - 1, col);
      this.board.togglePiece(row, col);
    };

    countPaths(0, 0);
    return totalPaths;
  }
}

module.exports = { RobotPaths };
