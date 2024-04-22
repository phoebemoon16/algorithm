/** 翻转二叉树 让你把整棵树镜像翻转，
 * 每个节点的左右节点都要去进行翻转互换
 */

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 翻转子树  将左节点和右节点树统一进行一个翻转 使用递归方法
function traverse(root) {
  if (root === null) return null;
  var left = traverse(root.left);
  var right = traverse(root.right);
  root.left = right;
  root.right = left;
  return root;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(traverse(root));
