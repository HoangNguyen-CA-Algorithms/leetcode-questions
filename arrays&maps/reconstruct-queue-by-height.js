/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let ans = [];
  people.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < people.length; i++) {
    let currHeight = people[i][0];
    let total = people[i][1]; //number of undefined/same height before
    for (let j = 0; j < people.length; j++) {
      if (total <= 0 && ans[j] === undefined) {
        ans[j] = people[i];
        break;
      }
      if (ans[j] === undefined) {
        total--;
      } else {
        if (ans[j][0] === currHeight) total--;
      }
    }
  }
  return ans;
};

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);
