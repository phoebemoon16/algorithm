/**5
 * 园区某部门举办了Family Day，邀请员工及其家属参加；
将公司园区视为一个矩形，起始园区设置在左上角，终点园区设置在右下角；
家属参观园区时，只能向右和向下园区前进，求从起始园区到终点园区会有多少条不同的参观路径。

输入描述
第一行为园区的长和宽；
后面每一行表示该园区是否可以参观，0表示可以参观，1表示不能参观

输出描述
输出为不同的路径数量

用例1
输入
3 3
0 0 0
0 1 0
0 0 0
输出
2

解题思路： 
可以是深度优先 递归深度优先
也可以是动态规划 dp[i][j] = dp[i-1][j]+dp[i][j-1]
 */

// 递归 +  深度优先
function solution(arr) {
  let offSets = [
    [1, 0],
    [0, 1],
  ];
  let ans = 0;
  let n = arr.length;
  let m = arr[0].length;
  function dfs(x, y) {
    if (x === n - 1 && y === m - 1) {
      ans++;
      return;
    }
    for (let [offsetX, offsetY] of offSets) {
      let newX = x + offsetX;
      let newY = y + offsetY;
      if (
        newX < n &&
        newX >= 0 &&
        newY < m &&
        newY >= 0 &&
        arr[newX][newY] === 0
      ) {
        dfs(newX, newY);
      }
    }
  }
  // 如果第一个元素就是1的话 则说明不可达
  if (arr[0][0] === 0) {
    dfs(0, 0);
  } else {
    return 0;
  }
  return ans;
}
console.log(
  solution([
    [0, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
  ])
);

// 动态规划
function dpFun(arr) {
  let n = arr.length;
  let m = arr[0].length;
  // 如果起点和终点为1  则说明不能到达 无法达到
  if (arr[0][0] === 1 || arr[n - 1][m - 1] === 1) {
    return 0;
  }
  //   fill 填充一个二维数组 用0进行填充
  let dp = new Array(n).fill(0).map(() => new Array(m).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // 等于1的时候就需要打破这个循环
      console.log(i, j);
      if (arr[i][j] === 1) {
        continue;
      }
      if (i > 0) {
        dp[i][j] += dp[i - 1][j];
      }
      if (j > 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }
  console.log(dp);
  return dp[n - 1][m - 1];
}
console.log(
  dpFun([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
