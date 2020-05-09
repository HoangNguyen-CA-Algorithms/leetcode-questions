/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let curr = m + n - 1;

  let insert1 = () => {
    nums1[curr] = nums1[i];
    i--;
  };
  let insert2 = () => {
    nums1[curr] = nums2[j];
    j--;
  };

  while (curr >= 0) {
    //one array is empty
    if (i < 0) {
      insert2();
    } else if (j < 0) {
      insert1();
    } else {
      if (nums1[i] > nums2[j] || j < 0) {
        insert1();
      } else {
        insert2();
      }
    }

    curr--;
  }
};
