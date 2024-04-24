/** 每日温度
 *请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。
 如果气温在这之后都不会升高，请在该位置用 0 来代替。

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]

解题思路： 
1.2个for循环
2.双指针

官方解释是单调栈 还没有见过此算法
 */

// 此解法官方超时
function solution(array) {
  let total = array.length;
  let left = 0;
  let right = 1;
  let result = [];
  while (left < total) {
    if (array[right] > array[left]) {
      result.push(right - left);
      left++;
      right = left + 1;
    } else {
      if (right === total - 1) {
        result.push(0);
        left++;
      } else {
        right++;
      }
    }
  }
  return result;
}
console.log(solution([73, 74, 75, 71, 69, 72, 76, 73]));

// 用栈的思路去解决 这个就在合理时间内 看此题解
// https://leetcode.cn/problems/iIQa4I/solutions/995032/shua-chuan-jian-zhi-offer-day18-zhan-ii-mdv06/
function solution2(array) {
  let total = array.length;
  let stack = [];
  let res = new Array(total).fill(0);
  for (let i = 0; i < total; i++) {
    while (stack.length > 0 && array[stack[stack.length - 1]] < array[i]) {
      let index = stack.pop();
      res[index] = i - index;
    }
    stack.push(i);
  }
  return res;
}

console.log(solution2([73, 74, 75, 71, 69, 72, 76, 73]));
