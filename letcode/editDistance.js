/*
 * @Author: wanghh
 * @Date: 2024-04-25 15:25:10
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-25 16:33:52
 * @Description:
 */
/**  
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
你可以对一个单词进行如下三种操作：
插入一个字符
删除一个字符
替换一个字符
可以用动态规划去做：

1.相等： word[i] == word[j] dp[i][j] = dp[i-1][j-1] 因为相等 所以可以不用替换取之前的下标进行替换的即可
2.不相等： word[i] !== word[j] dp[i][j] = Math.min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1
*/

function solution(word1, word2) {
  let w1 = word1.length + 1;
  let w2 = word2.length + 1;
  //   这样做是为了从1开始 而不是从下标0 开始
  const dp = new Array(w1).fill(0).map(() => new Array(w2).fill(0));
  for (let i = 1; i < w1; i++) {
    for (let j = 1; j < w2; j++) {
      if (i === 1) {
        dp[1][j] = j;
      }
      if (j === 1) {
        dp[i][1] = i;
      }
      if (i > 1 && j > 1) {
        if (word1[i] === word2[j]) dp[i][j] = dp[i - 1][j - 1];
        if (word1[i] !== word2[j])
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
    }
  }
  console.log(dp);
  return dp[w1 - 1][w2 - 1];
}

console.log(solution("horse", "ros"));
console.log(solution2("horse", "ros"), "22222");

function solution2(word1, word2) {
  let w1 = word1.length;
  let w2 = word2.length;
  //   这样做是为了从1开始 而不是从下标0 开始  不过下面边界处理好 这样做也可
  const dp = new Array(w1).fill(0).map(() => new Array(w2).fill(0));
  for (let i = 0; i < w1; i++) {
    for (let j = 0; j < w2; j++) {
      if (i === 0) {
        dp[0][j] = j + 1;
      }
      if (j === 0) {
        dp[i][0] = i + 1;
      }
      if (i > 0 && j > 0) {
        if (word1[i] === word2[j]) dp[i][j] = dp[i - 1][j - 1];
        if (word1[i] !== word2[j])
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
      }
    }
  }
  console.log(dp);
  return dp[w1 - 1][w2 - 1];
}
