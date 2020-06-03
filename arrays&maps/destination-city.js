/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let set = new Set();

  for (let [i, j] of paths) {
    set.add(j);
  }

  for (let [i, j] of paths) {
    set.delete(i);
  }

  for (let i of set) {
    return i;
  }
};
