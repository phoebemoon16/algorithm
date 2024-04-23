/*
 * @Author: wanghh
 * @Date: 2024-04-09 14:45:55
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-23 11:30:30
 * @Description:
 * 最长公共前缀序列
 * 是否是有效括号
 *
 * 简单做法：
 * 1. 2个for循环
 * 2. 二分查找最长前缀
 */
function longestCommonPrefix(strs) {
  console.log(strs);
  let resultStr = "";
  if (strs == null || strs.length == 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  for (let j = 0; j < strs[0].length; j++) {
    let str = strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (str !== strs[i][j] || !strs[i][j]) {
        return resultStr;
      } else if (i === strs.length - 1) {
        resultStr += str;
      }
    }
  }
  return resultStr;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["f"]));
console.log(longestCommonPrefix(["ft"]));

// 括号的解法 是不是有效括号
// ({}) ()[]{}

// 简化版本  非常巧妙算法 利用数组的 push  pop
// 先去push 左括号 如果不是左括号 则去匹配右括号 左括号和有括号相邻则一定是匹配的。 想了几种情况都是匹配的
// x in map
// map[x] !== x false

var isValid = function (s) {
  const stack = [],
    map = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  for (const x of s) {
    if (x in map) {
      stack.push(x);
      continue;
    }
    if (map[stack.pop()] !== x) return false;
  }
  return !stack.length;
};
