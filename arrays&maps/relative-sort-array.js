/**
 * @param {number[]} arr1
 * @param {number[]} arr2 smaller array
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let map = new Map();

  //set mapping from value to position
  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], 0);
  }

  let leftover = [];
  for (let i = 0; i < arr1.length; i++) {
    let curr = arr1[i];
    if (map.get(curr) == null) {
      leftover.push(curr);
    } else {
      map.set(curr, map.get(curr) + 1);
    }
  }

  leftover.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < arr2.length; i++) {
    let curr = arr2[i];
    let occ = map.get(curr);
    for (let i = 0; i < occ; i++) {
      res.push(curr);
    }
  }

  for (let i = 0; i < leftover.length; i++) {
    res.push(leftover[i]);
  }

  return res;
};
