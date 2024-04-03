/** 悄悄话
 * 
 * 假设有一个二叉树，根节点的索引为0，每个节点都有一个时间值，表示从其父节点接收悄悄话所需要的时间。如果一个节点的时间值为-1，表示该节点不存在。
现在需要计算所有节点接收悄悄话的时间，即从根节点开始，每个节点接收悄悄话的时间等于其父节点接收悄悄话的时间加上自身的时间值。
初始时，根节点所在位置的人有一个悄悄话想要传递给其他人，计算当所有节点都接收到悄悄话后，最后一个节点接收到悄悄话的时间。

输入描述：
数组（各元素之间空格隔开）

输出描述：
返回所有节点都接收到悄悄话花费的时间

二叉树的层序遍历

-1表示空节点
输入： 0 9 20 -1 -1 15 7 -1 -1 -1 -1 3 2
输出： 38

层序遍历序列：在树的层序遍历中，首先访问根节点，然后按照从左到右的顺序依次访问每个层级上的节点。
具体来说，层序遍历按照从上到下、从左到右的顺序访问每个层级的节点。 有点像广度优先遍历
则： 如果父节点为K 则子节点为2k +1 以及 2K +2

思路一： 去生成树 或者 有一定的逻辑（二叉树）
1.用队列去做 queue 每次找父节点 然后求其的子节点 并计算到此节点需要的时间
 */

function solution(array) {
  let queue = [0];
  let num = 0;
  while (queue.length > 0) {
    let fa = queue.shift();
    let ch1 = fa * 2 + 1;
    let ch2 = fa * 2 + 2;

    // 判断是否存在子节点
    const ch1_exe = ch1 < array.length && array[ch1] !== -1;
    const ch2_exe = ch2 < array.length && array[ch2] !== -1;

    if (ch1_exe) {
      array[ch1] += array[fa];
      queue.push(ch1);
    }
    if (ch2_exe) {
      array[ch2] += array[fa]; // 每一个子节点都加上父节点的值 最后的一层的子节点 哪个大 就是最后的答案
      queue.push(ch2);
    }
    if (!ch1_exe && !ch2_exe) {
      // 表示是最后一层
      num = Math.max(num, array[fa]); // 求最后一层最大的值
    }
  }
  return num;
}

console.log(solution([0, 9, 20, -1, -1, 15, 7, -1, -1, -1, -1, 3, 2]));
// 这个用例下的计算有问题 取每一层最大的 而不是子节点最大的 都有子节点的话 就会一层加2次
console.log(solution([0, 1, 1, 2, 3, 5, 1, 4, 7, -1, -1, -1, -1, -1, -1]));