/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length <= 2) return true;
  let slope = getSlope(coordinates[0], coordinates[1]);
  let prev = coordinates[0];
  for (let i = 1; i < coordinates.length; i++) {
    let curr = coordinates[i];
    let tempSlope = getSlope(prev, curr);
    if (slope !== tempSlope) {
      return false;
    }

    rev = curr;
  }
  return true;
};

var getSlope = function (a, b) {
  let rise = b[1] - a[1];
  let run = b[0] - a[0];
  return rise / run;
};

console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ])
);
