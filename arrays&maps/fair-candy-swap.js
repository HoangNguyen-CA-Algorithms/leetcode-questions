/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */

//inefficient o(n^2)
var fairCandySwap = function (A, B) {
  let sum1 = A.reduce((prev, curr) => prev + curr);
  let sum2 = B.reduce((prev, curr) => prev + curr);

  let set = new Set();
  for (let i of B) {
    set.add(i);
  }

  for (let i of A) {
    let need = (sum2 - sum1 + 2 * i) / 2;
    if (set.has(need)) {
      return [i, need];
    }
  }
  return -1;
};

console.log(fairCandySwap([1, 1], [2, 2]));
