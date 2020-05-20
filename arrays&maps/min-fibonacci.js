/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  let fibb = [1, 1];

  let currK = k;
  let count = 0;
  let res;
  while (true) {
    res = findLargestFib(currK, fibb);
    currK = res;
    count++;

    if (res === 0) {
      break;
    }
  }

  return count;
};

function findLargestFib(k, fibb) {
  if (k <= 1) return 0;
  let curr = 0;
  let i = 2;
  while (curr < k) {
    if (fibb[i - 1] + fibb[i - 2] > k) break;
    curr = fibb[i - 1] + fibb[i - 2];
    if (fibb[i] == null) {
      fibb[i] = curr;
    }
    i++;
  }
  return k - curr;
}

console.log(findMinFibonacciNumbers(7));
