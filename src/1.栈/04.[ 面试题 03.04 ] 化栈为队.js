/**
 * * 题目名称：化栈为队
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci
 * 题目描述
评论 (88)
题解 (236)
提交记录
面试题 03.04. 化栈为队
实现一个MyQueue类，该类用两个栈来实现一个队列。


示例：

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // 返回 1
queue.pop();   // 返回 1
queue.empty(); // 返回 false

说明：

你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 */

// * 思路：与02相似的思路 两个数组为两个栈
var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];

};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stack2.length !== 0) return this.stack2.pop();
    while (this.stack1.length)  this.stack2.push(this.stack1.pop());
    return this.stack2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.stack2.length === 0) {
        while (this.stack1.length) this.stack2.push(this.stack1.pop())
    };
    let result = this.stack2[this.stack2.length - 1];
    return result;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */ 
MyQueue.prototype.empty = function () {
    //两个数组加起来都为空时为false
    return this.stack1.length + this.stack2.length === 0
};


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');