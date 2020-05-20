/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
  let rows = [];
  let cols = [];

  for (let i = 0; i < indices.length; i++) {
    let x = indices[i][0];
    let y = indices[i][1];
    if (rows[x] === undefined) rows[x] = 0;
    if (cols[y] === undefined) cols[y] = 0;
    rows[x]++;
    cols[y]++;
  }
  let res = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (((rows[i] || 0) + (cols[j] || 0)) % 2 === 1) {
        res++;
      }
    }
  }
  return res;
};

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ])
);
