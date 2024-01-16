/*
 * @Author: wanghh
 * @Date: 2024-01-09 09:17:21
 * @LastEditors: wanghh
 * @LastEditTime: 2024-01-16 11:06:06
 * @Description:
 */
/**
 * 猴子吃香蕉 可以从左边吃 也可以从右边吃 也可以从两头吃 最多吃的个数为N 请问猴子最多吃多少个香蕉
 *  */

function solution(arr, n) {
  // 可以先假设从一头开始吃 得到一个值 再定义2个指针 一个从另外一头开始 一个在这头 移动n个 找到最大的值
  let rightNum = 0;
  for (let i = arr.length - n; i < arr.length; i++) {
    rightNum += arr[i];
  }

  // 又忘记了
  if (n === arr.length) {
    return rightNum;
  }
  let sum = rightNum;
  let ans = sum; // 最大的值
  let left = 0;
  let right = arr.length - n;

  // left从0开始的 所以要小于
  while (left < n) {
    // left++ 先赋值再加
    console.log(left, right);
    sum += arr[left++] - arr[right++];
    console.log(left, right);
    ans = Math.max(sum, ans);
  }

  return ans;
}
console.log(solution([4, 2, 2, 3], 2));
console.log(solution([1, 2, 3], 3));

console.log(solution([1, 2, 2, 7, 3, 6, 1], 3));

function solution2(arr) {
  // 少了排序 ---记住一定要先从小到大排序
  arr = arr.sort((a, b) => a[0] - b[0]);
  let pre = arr[0];
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    if (pre[1] >= cur[0]) {
      pre[1] = Math.max(cur[1], pre[1]); // pre[1] > cur[0] 就要合并区间了
    } else {
      result.push(pre);
      pre = cur;
    }
  }
  result.push(pre);
  return result;
}
// 合并区间
console.log(
  solution2([
    [1, 4],
    [4, 5],
  ])
);
console.log(
  solution2([
    [1, 4],
    [2, 5],
    [7, 9],
    [14, 18],
  ])
);
console.log(
  solution2([
    [1, 4],
    [7, 9],
    [14, 18],
  ])
);

/**
 * 孙悟空吃蟠桃 每个小时只能选一棵树， 一颗树上有k个果，问H个小时能吃完果子的最小速度？
 * 二分法 k最大 k最小 求中间 求最大速度和最小速度 最大速度小于最小速度了 说明就是成功了
 * */
