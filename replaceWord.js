/*
 * @Author: wanghh
 * @Date: 2024-02-18 10:45:04
 * @LastEditors: wanghh
 * @LastEditTime: 2024-02-18 14:22:18
 * @Description:
 */
/** 编辑距离
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
你可以对一个单词进行如下三种操作：
插入一个字符
删除一个字符
替换一个字符

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')

解题思路： 用动态规划去做 
word[i-1] === word[j-1] 不操作 dp[i][j] = dp[i-1][j-1]
word[i-1] !== word[j-1] 增删换 
word1 删除一个元素 dp[i][j] = dp[i-1][j] + 1
word1 添加一个元素 dp[i][j] = dp[i][j-1] + 1
替换元素： dp[i][j] = dp[i-1][j-1] + 1
if (word1[i - 1] == word2[j - 1]) {
    dp[i][j] = dp[i - 1][j - 1];
}
else {
    dp[i][j] = min({dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]}) + 1;
}
*/
const minDistance = (word1, word2) => {
  let dp = Array.from(Array(word1.length + 1), () => Array(word2.length + 1));
  dp[0][0] = 0;
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }
  console.log(dp, "dp000");
  return dp[word1.length][word2.length];
};

console.log(minDistance("horse", "ros"));
