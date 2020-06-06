/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let j = i;
    while (j > 0) {
      sum += j % 10;

      j = Math.floor(j / 10);
    }
    if (arr[sum] != null) {
      arr[sum]++;
    } else {
      arr[sum] = 1;
    }
  }
  console.log(arr);
  let largest = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == null) continue;
    largest = Math.max(arr[i], largest);
  }
  let temp = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == null) continue;

    if (arr[i] === largest) temp++;
  }
  return temp;
};

console.log(countLargestGroup(13));
