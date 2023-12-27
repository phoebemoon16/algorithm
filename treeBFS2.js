/**打印二叉树
 * 给定一个树，从上到下打印，同一节点就是从左到右 打印树 广度优先遍历
 * 结果：[3,9,20,15,7] 一起打印每一个节点
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
      tempArr.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    ret = ret.concat(tempArr);
  }
  return ret;
}
let result = levelOrder(tree);
// console.log(result, "result")
