/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map1 = new Map();
  let map2 = new Map();
  for (i = 0; i < nums1.length; i++) {
    let value = nums1[i];
    if (map1.get(value) == null) {
      map1.set(value, 1);
    } else {
      map1.set(value, map1.get(value) + 1);
    }
  }

  for (i = 0; i < nums2.length; i++) {
    let value = nums2[i];
    if (map2.get(value) == null) {
      map2.set(value, 1);
    } else {
      map2.set(value, map2.get(value) + 1);
    }
  }

  let final = [];
  for (let [key, val] of map1) {
    if (map2.get(key) == null) continue;
    let repeat = Math.min(val, map2.get(key));
    for (j = 0; j < repeat; j++) {
      final.push(key);
    }
  }

  return final;
};

let test = [1, 2, 2, 1];
let test2 = [2, 2];

console.log(intersect(test, test2));
