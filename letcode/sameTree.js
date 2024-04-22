/** 
 * 求相同树 广度优先
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
    如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

    怎么根据数组是生成二叉树？

    解题思路： 中序遍历相等？ 是不是就可以认为是相同树？

*/

// 递归左子树和左子树比 右子树和右子树比
function solution(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }
  return solution(p.left, q.left) && solution(p.right, q.right);
}
