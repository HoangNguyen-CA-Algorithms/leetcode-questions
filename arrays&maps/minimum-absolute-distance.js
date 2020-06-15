/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  if (arr.length <= 1) return [];
  let res = [];

  arr.sort((a, b) => a - b);

  let prev = arr[0];
  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    if (curr - prev < minDiff) {
      res = [];
      res.push([prev, curr]);
      minDiff = curr - prev;
    } else if (curr - prev == minDiff) {
      res.push([prev, curr]);
    }

    prev = curr;
  }

  return res;
};

console.log(minimumAbsDifference([4, 1, 2, 3]));
