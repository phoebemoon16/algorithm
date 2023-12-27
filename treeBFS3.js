/**打印二叉树
 * 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。
 * 给定二叉树: [3,9,20,null,null,15,7]
 * 结果：[[3],[20,9],[15,7]] 每一层打印一行
 */
let tree = [3, 9, 20, null, null, 18, 7];
function levelOrder(root) {
  const ret = [];
  if (!root) {
    return;
  }
  const q = [];
  q.push(root);
  console.log(q, "qqqq");
  while (q.length !== 0) {
    const currentLevelSize = q.length;
    let tempArr = [];
    for (let i = 0; i < currentLevelSize; i++) {
      const node = q.shift();
      console.log(node, node.val, "node909");
      //   偶数的时候就正常push 奇数的时候就一直第一个元素插入
      if (res.length % 2 === 0) {
        temp.push(node.val);
      } else {
        temp.unshift(node.val);
      }
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    ret.push(tempArr);
  }
  return ret;
}
let result = levelOrder(tree);
// console.log(result, "result")
