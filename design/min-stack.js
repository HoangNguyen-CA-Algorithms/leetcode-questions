/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.arr = [];
  this.mins = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.mins.length == 0 || this.mins[this.mins.length - 1] >= x) {
    this.mins.push(x);
  }
  this.arr.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.mins[this.mins.length - 1] == this.stack[this.stack.length - 1]) {
    this.mins.pop();
  }
  return this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.mins[this.mins.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
