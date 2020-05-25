/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let set = new Set();
  for (let i of candies) {
    set.add(i);
  }

  let entries = [...set.entries];
  return Math.min(entries.length, candies.length / 2);
};
