/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  if (arr.length <= 1) return arr[0];
  let quarter = Math.ceil(arr.length / 4);
  let occ = 0;
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (prev === arr[i]) {
      occ++;
    } else {
      occ = 0;
    }

    if (occ >= quarter) {
      return arr[i];
    }
    prev = arr[i];
  }
  return -1;
};

console.log(findSpecialInteger([1, 1, 2, 2, 3, 3, 3, 3]));
