/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 * 输入：n = 3
   输出：["((()))","(()())","(())()","()(())","()()()"]

   输入：n = 1
   输出：["()"]
 */

function solution(n) {
  let result = [];
  function backTrack(leftNum, rightNum, str) {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }
    // 每一次都在做选择 ( ) 选了方案A 可以回溯回来继续选方案B 直到所有的可能情况加完
    if (leftNum > 0) {
      //   leftNum--; 不能这样做 因为会影响num的值 num值是不能被影响的
      //   backTrack(leftNum, rightNum, str + "(");
      backTrack(leftNum - 1, rightNum, str + "(");
    }
    if (rightNum > leftNum) {
      //   rightNum--;
      //   backTrack(leftNum, rightNum, str + ")");
      console.log(leftNum, str);
      backTrack(leftNum, rightNum - 1, str + ")");
    }
  }
  backTrack(n, n, "");
  return result;
}

console.log(solution(3));
