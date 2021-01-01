/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses\
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

 */

// * 思路：建立空数组作为栈，对param进行循环检测，是左括号的压入栈，右括号则和栈顶的匹配，不符合的return false
var isValid = function (s) {
    let arr = [];
    let len = s.length;
    if(len%2) return false;
    for (let i = 0; i < len; i++) {
        let letter = s[i]
        switch (letter) {
            case '{':
                arr.push(letter);
                break;
            case '(':
                arr.push(letter);
                break;
            case '[':
                arr.push(letter);
                break;
            case '}':
                if (arr.pop() !== '{') return false;
                break;
            case ')':
                if (arr.pop() !== '(') return false;
                break;
            case ']':
                if (arr.pop() !== "[") return false;
                break;
        }
    }
    return !arr.length;
};


// 测试用例
let test = '()'

console.time('执行用时');
console.log(isValid(test));
console.timeEnd('执行用时');