/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.array = []
  // 辅助栈
  this.helper = [];

};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.array.push(x);
  // 辅助栈为空 且 入栈的元素小于等于 辅助栈 栈顶时进栈
  if (this.helper.length === 0 || x <= this.helper[this.helper.length - 1]) {
    this.helper.push(x)
  }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let top = this.array.pop();
  // 出栈元素 等于 辅助栈栈顶时，出栈
  if (top === this.helper[this.helper.length - 1]) {
    this.helper.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.array[this.array.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.helper[this.helper.length - 1]
};
