/*
 * @Author: wanghh
 * @Date: 2024-04-22 09:00:36
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-22 16:36:38
 * @Description:
 */
/**
 * 深度优先： 求路径和 求二叉搜索树
 * 求路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，
 * 这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
 * 叶子节点： 是指没有子节点的节点
 * letcode 会将数组自动转为二叉树，树的节点结构：
 * {
 *  val: '', 值
 *  left:{},
 *  right: {}
 * }
 */

// 深度优先
var hasPathSum = function (root, targetSum) {
  let flag = false;
  function dfs(node, value) {
    if (!node) {
      return null;
    }
    node.val += value;
    // 必须为叶子节点 没有左右节点
    if (node.val == targetSum && !node.left && !node.right) {
      flag = true;
      return true;
    }
    dfs(node.left, node.val);
    dfs(node.right, node.val);
  }
  dfs(root, 0);
  return flag;
};

// bfs  stack shift()前面push进去的 先进先出
var hasPathSumBfs = function (root, targetSum) {
  if (!root) return 0;
  //   stack里面存放 节点 以及 节点值
  const stack = [[root, root.val]];
  while (stack.length > 0) {
    const [p, l] = stack.shift();
    if (l === targetSum && !p.left && !p.right) return true;
    if (p.left) stack.push([p.left, l + p.left.val]);
    if (p.right) stack.push([p.right, l + p.right.val]);
  }
  return false;
};

// 递归做法 做减法 左或者右子树有其中一个路径和为 target即可 所以可以用 ||
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (targetSum == root.val && !root.left && !root.right) return true;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

// 递归做法 做加法
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  sum += root.val;
  if (targetSum == sum && !root.left && !root.right) return true;
  return (
    hasPathSum(root.left, sum, targetSum) ||
    hasPathSum(root.right, sum, targetSum)
  );
};
