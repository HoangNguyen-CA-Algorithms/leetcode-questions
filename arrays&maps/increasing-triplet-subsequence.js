/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let lowest = Infinity;

  let secondLowest = null;

  let altLowest = null;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    if (curr < lowest) {
      if (secondLowest === null) {
        lowest = curr;
      } else {
        if (altLowest === null) {
          altLowest = curr;
        } else {
          if (curr > altLowest) {
            lowest = altLowest;
            secondLowest = curr;
            altLowest = null;
          } else {
            altLowest = curr;
          }
        }
      }
    } else if (curr > lowest) {
      if (secondLowest !== null) {
        if (curr > secondLowest) {
          return true;
        } else {
          secondLowest = curr;
        }
      } else {
        secondLowest = curr;
      }
    }
  }

  return false;
};

console.log(increasingTriplet([1, 1, -2, 6]));
