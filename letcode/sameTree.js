/*
 * @Author: wanghh
 * @Date: 2024-04-22 09:39:42
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-26 15:15:27
 * @Description:
 */
/** 
 * 求相同树 广度优先
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
    如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

    怎么根据数组是生成二叉树？

    解题思路： 中序遍历相等？ 是不是就可以认为是相同树？

    对称tree 判断一个树是不是左右对称的

    1.无子节点的情况下 val相等
    2.有子节点的情况下 left.left = right.right left.right = right.left

*/

// 递归左子树和左子树比 右子树和右子树比 并节点和节点比
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

/** 对称二叉树
 *  判断一个树是不是对称二叉树
 *  子树也一定是对称二叉树
 *
 * 先再定义一个一模一样的树 用做判断
 * 和判断相同树是差不多的步骤 只不过需要加上下面的判断条件
 * 1. left.left = right.right
 * left.right = right.left
 * 满足此2个条件 才能证明他是对称二叉树
 */
function check(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  if (p.val === q.val && check(p.left, q.right) && check(p.right, q.left)) {
    return true;
  } else {
    return false;
  }
}
var isSymmetric = function (root) {
  return check(root, root);
};
console.log(isSymmetric([1, 2, 2, 3, 4, 4, 3]));


/***
 * 二叉树的层序遍历
 *  使用广度优先遍历
 */

function levelSearch(root){
 let res = []
  let statck = []
  statck.push(root)
  while(statck.length > 0) {
    let currentLength = statck.length
    // 每次都能获取到同层的左右节点
    for(let i = 0; i< currentLength; i++) {
      const node = statck.shift()
      res[res.length-1].push(node.val)
      if(node.left) statck.push(node.left)
      if(node.right) statck.push(node.right)
    }
  }
  return res
}