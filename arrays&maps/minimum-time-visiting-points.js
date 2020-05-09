/**
 * @param {number[][]} points
 * @return {number}
 */
//O(n) runtime
var minTimeToVisitAllPoints = function (points) {
  let prev = points[0];
  let total = 0;
  for (let i = 1; i < points.length; i++) {
    let curr = points[i];
    let x = Math.abs(curr[0] - prev[0]);
    let y = Math.abs(curr[1] - prev[1]);
    total += Math.max(x, y);
    prev = curr;
  }
  return total;
};

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
);
