/** 验证搜索二叉树
 * 
 * 节点的左
子树
只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。


中序遍历输出的二叉搜索树节点的数值是有序序列 ！！！！

-77 -75 90 3

1 5 3 4 6

左 根 右  

还有一道题是恢复二叉树，将普通二叉树恢复成搜索二叉树
先中序遍历然后再排序 排完序的就是搜索二叉树 再将此树输出

有个例子就是不是搜索二叉树的错误情况  
 */

function solution(root) {
  let result = [];
  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    result.push(node.val);
    dfs(node.right);
  }
  dfs(root);
  // let flag = true c错误原因刚开始想着是和3个3个比 i+=3 其他不然
  for (let i = 0; i < result.length; i++) {
    if (result[i] >= result[i + 1] || result[i + 1] >= result[i + 2]) {
      flag = false;
      return false;
    }
  }
  return true;
}
console.log(solution([2, 1, 3]));
console.log(solution([5, 1, 4, null, null, 3, 6]));

// 将中序节点 转化为 原节点树
// let root = [];
function solution2(inorder) {
  if (inorder.length === 0) return null;
  const midIndex = Math.floor(inorder.length / 2);
  root.push(inorder[midIndex]);
  solution2(inorder.slice(0, midIndex));
  solution2(inorder.slice(midIndex + 1));
  //   root.push(left);
  //   root.push(inorder[(0, midIndex)]);
  return root;
}

// function inorderTraversal(root) {
//   if (!root) return [];
//   return [
//     ...inorderTraversal(root.left),
//     root.val,
//     ...inorderTraversal(root.right),
//   ];
// }
// console.log(solution2([2, 1, 3]));
// // [1,3,null,null,2]
// console.log(solution2([1, 3, null, null, 2]));
