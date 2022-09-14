let chessBoard = [[], [], [], [], [], [], [], []];

for (let x = 0; x < 8; x++) {
  for (let y = 0; y < 8; y++) {
    if ((x + y) % 2 == 0) {
      chessBoard[x][y] = "Black";
    } else {
      chessBoard[x][y] = "White";
    }
  }
}

console.table(chessBoard);
console.log(chessBoard);
