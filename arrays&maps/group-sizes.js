/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let res = [];
  let groups = [];

  for (let i = 0; i < groupSizes.length; i++) {
    let groupSize = groupSizes[i];
    if (groups[groupSize] == undefined) {
      groups[groupSize] = [];
    }
    groups[groupSize].push(i);
    if (groups[groupSize].length >= groupSize) {
      res.push([...groups[groupSize]]);
      groups[groupSize] = [];
    }
  }

  return res;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
