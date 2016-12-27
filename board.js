var generateBoard = function (height = 7, width = 7) {
  var output = [];
  var rows = [];
  var counterWidth = 0;
  var counterHeight = 0;

  while (counterWidth < width) {
    rows.push(0);
    counterWidth ++;
  }

  while (counterHeight < height ) {
    output.push(rows);
    counterHeight++;
  }

  return output;
}

var evaluate = function (board) {
  for (var i = 0; i < board.length; i++) {
    var row = board[i];

    var sumRow = row.reduce(function (a, b) {
      if (b === 1) {
        return a + b;
      } else {
        return 0;
      }
    });

    if (sumRow >= 4) {
      return true;
    } 
  };

  for (var col = 0; col < board.length; col++) {
    //reset new count everytime you move col
    var count = 0; 
    for (var row = 0; row < board.length; row++) { 
      if (board[row][col] !== 1) {
        count = 0;
      }
      count ++;
    }
    // if any column has connect 4, return
    if (count >= 4) {
      return true;
    } 
  }

  return false;
}

var board = generateBoard();
console.log(board[5], 'board')
board[5][2] = 1;
console.log(board, 'boa');

console.log(evaluate(board));

module.exports = {
  generateBoard: generateBoard
}