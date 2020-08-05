/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function (N) {
  let ans = [];
  let curr = [];
  let avail = [];
  for (let i = 1; i <= N; i++) {
    avail.push(i);
  }
  backtrack(avail, curr, ans, 1);

  return ans.length;
};

var backtrack = function (avail, curr, ans, index) {
  // console.log(avail, curr);
  //console.log(curr, avail);
  if (avail.length === 0) {
    ans.push([...curr]);
  } else {
    for (let i = 0; i < avail.length; i++) {
      let num = avail[i];
      if (num % index === 0 || index % num === 0) {
        curr.push(num);
        avail.splice(i, 1);
        backtrack(avail, curr, ans, index + 1);
        avail.splice(i, 0, num);
        curr.pop();
      }
    }
  }
};

console.log(countArrangement(2));
