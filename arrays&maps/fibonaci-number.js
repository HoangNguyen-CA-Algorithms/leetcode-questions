/**
 * @param {number} N
 * @return {number}
 */
var fib1 = function (N) {
  if (N == 0 || N == 1) return 1;
  else {
    return fib(N - 1) + fib(N - 2);
  }
};

//golden ratio
var fib2 = function (N) {
  let goldenRatio = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(goldenRatio, N) / Math.sqrt(5));
};

var fib = function (N) {
  if (N <= 1) return N;
  if (N == 2) return 1;

  let current = 0;
  let prev1 = 1;
  let prev2 = 1;
  for (let i = 3; i <= N; i++) {
    current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return current;
};
console.log(fib(10));
