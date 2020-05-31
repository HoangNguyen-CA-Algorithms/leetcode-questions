/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rowLength = board.length;
  let colLength = board[0].length;
  let sets = [];
  for (let i = 0; i < 3; i++) {
    sets[i] = [];
    for (let j = 0; j < 3; j++) {
      sets[i][j] = new Set();
    }
  }

  for (let i = 0; i < rowLength; i++) {
    let set = new Set();
    for (let j = 0; j < colLength; j++) {
      let el = board[i][j];

      let setRow = Math.floor(i / 3);
      let setCol = Math.floor(j / 3);
      //console.log(setRow, setCol);
      let groupSet = sets[setRow][setCol];

      if (groupSet.has(el) && el !== '.') {
        return false;
      }
      groupSet.add(el);

      if (set.has(el) && el !== '.') {
        return false;
      }
      set.add(el);
    }
  }

  for (let i = 0; i < colLength; i++) {
    let set = new Set();
    for (let j = 0; j < rowLength; j++) {
      let el = board[j][i];
      if (set.has(el) && el !== '.') {
        return false;
      }
      set.add(el);
    }
  }
  return true;
};

console.log(
  isValidSudoku([
    ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
    ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
    ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
    ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
    ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
  ])
);
