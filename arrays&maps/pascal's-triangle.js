var generate = function (numRows) {
  let final = [];
  let length = 0;
  for (let i = 0; i < numRows; i++) {
    length++;
    let row = [];

    for (let j = 0; j < length; j++) {
      if (j == 0 || j == length - 1) {
        row.push(1);
      } else {
        let prevRow = final[i - 1];
        row.push(prevRow[j - 1] + prevRow[j]);
      }
    }
    final.push(row);
  }
  return final;
};

console.log(generate(3));
