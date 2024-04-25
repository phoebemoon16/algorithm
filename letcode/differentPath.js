/** 不同路径问题
 *一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）

使用动态规划做 简单的dp规划

1.第i,j个格子的路劲 只能从上面或者左边走来 所以计算这个格子的可能路径并求和即可。
2.边界情况 i为0的路径可能为1 因为只能选择右走
  j为0的路径同样的也只能为1 因为只能选择下走。
 */
function uniquePaths(m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) dp[0][j] = 1;
      if (j === 0) dp[i][0] = 1;
      if (i > 0 && j > 0) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }
  return dp[m - 1][n - 1];
}

console.log(uniquePaths(3, 7));

/**
 *  一个图的可能路径问题
 *  给定一个有 n 个节点的有向无环图，用二维数组 graph 表示，请找到所有从 0 到 n-1 的路径并输出（不要求按顺序）。
 *
 * graph 的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些结点（译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a ），若为空，就是没有下一个节点了。
解题思路： 深度优先 先沿着一条线走到底 看是否能到达n-1 能则+1 否则继续选择其他路线走
1.深度优先
*/
function allPathsSourceTarget(graph) {
  let target = graph.length - 1;
  let res = [];
  function dfs(graph, index, path) {
    let tempNode = graph[index];
    for (let i = 0; i < tempNode.length; i++) {
      if (tempNode[i] === target) {
        let finalPath = [...path, target];
        res.push(finalPath);
        continue;
      }
      dfs(graph, tempNode[i], [...path, tempNode[i]]);
    }
  }
  dfs(graph, 0, [0]);
  return res;
}

console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
