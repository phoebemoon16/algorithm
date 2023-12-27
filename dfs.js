/*
 * @Author: wanghh
 * @Date: 2023-12-27 14:57:23
 * @LastEditors: wanghh
 * @LastEditTime: 2023-12-27 15:10:33
 * @Description:
 */
// 深度优先遍历

function depthFirstSearch(start) {
  const visited = {};
  const result = [];

  function dfs(node) {
    if (!node || visited[node]) {
      return;
    }

    visited[node] = true;
    result.push(node);

    const neighbors = graph[node];

    for (const neighbor of neighbors) {
      dfs(neighbor);
    }
  }
  dfs(start);
  return result;
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F", "G"],
  D: ["B"],
  E: ["B", "H"],
  F: ["C"],
  G: ["C"],
  H: ["E"],
};

// ['A', 'B', 'D','E', 'H', 'C', 'F', 'G'] A能到达的节点顺序
console.log(depthFirstSearch("A"));
