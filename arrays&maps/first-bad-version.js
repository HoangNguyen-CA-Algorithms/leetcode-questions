/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    return BS(0, n);
  };

  function BS(l, r) {
    if (l >= r) {
      return l;
    } else {
      mid = Math.floor((l + r) / 2);
      if (isBadVersion(mid)) {
        return BS(l, mid);
      } else {
        return BS(mid + 1, r);
      }
    }
  }
};
