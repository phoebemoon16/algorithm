/** 寻宝
 * 小华按照地图去寻宝，地图上被划分成 m 行和 n 列的方格，横纵坐标范围分别是 [0, n-1] 和 [0, m-1]。
在横坐标和纵坐标的数位之和不大于 k 的方格中存在黄金（每个方格中仅存在一克黄金），但横坐标和纵坐标之和大于 k 的方格存在危险不可进入。小华从入口 (0,0) 进入，任何时候只能向左，右，上，下四个方向移动一格。
请问小华最多能获得多少克黄金？

输入描述
坐标取值范围如下：

0 ≤ m ≤ 50
0 ≤ n ≤ 50
k 的取值范围如下：
0 ≤ k ≤ 100
输入中包含3个字数，分别是m, n, k
输出描述
输出小华最多能获得多少克黄金

用例1
输入
40 40 18
输出
1484
用例2
输入
5 4 7
输出
20

解题思路： 双重循环 深度优先
 */
function solution(n, m, k) {
  let ans = 0;
  let offSets = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  let visited = new Set();
  //   let dp = new Array(n).fill(0).map((item) => new Array(m).fill(0));
  //   dp[0][0] = 1;
  function dfs(x, y) {
    if (
      x >= 0 &&
      x < m &&
      y >= 0 &&
      y < n &&
      getDigitSum(x) + getDigitSum(y) <= k &&
      !visited.has(x * n + y)
    ) {
      visited.add(x * n + y);
      ans++;
      for (let [offsetX, offsetY] of offSets) {
        let newX = x + offsetX;
        let newY = y + offsetY;
        dfs(newX, newY);
      }
    } else {
      return ans;
    }
  }
  dfs(0, 0);
  return ans;
}

function getDigitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(solution(40, 40, 18));
