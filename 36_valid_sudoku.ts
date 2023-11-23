function isValidSudoku(board: string[][]): boolean {
  // create the maps
  // 9 boards maps; 9 row maps; 9 column map
  const boardMaps = []; // boardMaps[i] = map for board i (left to right and down)
  const rowMaps = []; // rowMaps[i] = map for row i
  const colMaps = []; // colMaps[i] = map for col i
  for (let i = 0; i < 9; i++) {
    boardMaps[i] = new Map<string, number>();
    rowMaps[i] = new Map<string, number>();
    colMaps[i] = new Map<string, number>();
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const boardVal = board[i][j];
      if (boardVal === ".") continue;

      const boardRow = Math.floor(i / 3);
      const boardCol = Math.floor(j / 3);
      const boardNumber = boardRow * 3 + boardCol;

      if (boardNumber === 1) console.log(boardMaps[boardNumber]);
      if (
        rowMaps[i].get(boardVal) ||
        colMaps[j].get(boardVal) ||
        boardMaps[boardNumber].get(boardVal)
      ) {
        return false;
      } else {
        rowMaps[i].set(boardVal, 1);
        colMaps[j].set(boardVal, 1);
        boardMaps[boardNumber].set(boardVal, 1);
      }
    }
  }

  return true;
}
