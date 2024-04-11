/*
 * @Author: wanghh
 * @Date: 2024-04-09 15:17:05
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-09 15:48:54
 * @Description:
 *
 * 最长回文字符串
 * 动态规划： 回文串的特点就是他的子串 也是回文串
 *
 * dp[i][j] 从i到j的字符串 是回文字符串
 * si === sj 2个字符相等 且dp[i+1][j-1] 也是回文字符串
 */
/** 回文字符串 */
function solution(str) {
  let n = str.length;
  let res = "";
  if (str.length === 0) {
    return "";
  }
  if (str.length === 1) {
    return str;
  }
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = str[i] === str[j] && (dp[i + 1][j - 1] || j - i <= 2);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = str.substring(i, j + 1);
      }
    }
  }
  return res;
}

console.log(solution("babad"));
