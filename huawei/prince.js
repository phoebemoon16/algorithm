/*
 * @Author: wanghh
 * @Date: 2024-01-11 08:09:23
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-02 10:31:12
 * @Description:
 */
/** 寻宝
 * 
小华按照地图去寻宝，地图上被划分成 m 行和 n 列的方格，横纵坐标范围分别是 [0, n-1] 和 [0, m-1]。
在横坐标和纵坐标的数位之和不大于 k 的方格中存在黄金（每个方格中仅存在一克黄金），但横坐标和纵坐标之和
大于 k 的方格存在危险不可进入。小华从入口 (0,0) 进入，任何时候只能向左，右，上，下四个方向移动一格。
请问小华最多能获得多少克黄金？

输入描述
坐标取值范围如下：

0 ≤ m ≤ 50
0 ≤ n ≤ 50
k 的取值范围如下：
0 ≤ k ≤ 100
输入中包含3个字数，分别是m, n, k
输出描述
输出小华最多能获得多少克黄金

用例1
输入
40 40 18
输出
1484
用例2
输入
5 4 7
输出
20

解题思路： 树图的遍历问题 广度优先遍历 深度优先遍历
双重循环 深度优先
 */

// 深度优先 栈(后进先出) push pop 递归
function solution(n, m, k) {
  let ans = 0;
  let offSets = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  let visited = new Set(); // 是否到达过
  //   let dp = new Array(n).fill(0).map((item) => new Array(m).fill(0));
  //   dp[0][0] = 1;
  function dfs(x, y) {
    if (
      x >= 0 &&
      x < m &&
      y >= 0 &&
      y < n &&
      getDigitSum(x) + getDigitSum(y) <= k &&
      !visited.has(x * n + y)
    ) {
      visited.add(x * n + y);
      ans++;
      for (let [offsetX, offsetY] of offSets) {
        let newX = x + offsetX;
        let newY = y + offsetY;
        dfs(newX, newY);
      }
    } else {
      return;
    }
  }
  dfs(0, 0);
  return ans;
}

// 记住一个知识点： 数位之和 就是个位+十位+百位等等 就是数位之和 本题中最大就是50 所以求十位和个位就可以
function getDigitSum(num) {
  let sum = 0;
  while (num > 0) {
    // console.log(num, "000");
    sum += num % 10; // 个位数
    num = Math.floor(num / 10); // 十位数
    // console.log(num, "1111");
  }
  return sum;
}

console.log(getDigitSum(121));
console.log(solution(40, 40, 18), "dfs");
console.log(bfsSolution(40, 40, 18), "bfs");

// 用广度优化的算法去做 队列（先进先出） unshift shift
function bfsSolution(n, m, k) {
  let ans = 0;
  let offSets = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  let visited = new Set(); // 是否到达过
  function bfs() {
    let queue = [];
    queue.push(0);
    while (queue.length > 0) {
      const pos = queue.shift(); // 取出第一个元素
      let y = pos % n;
      let x = (pos - y) / n;
      for (let [offsetX, offsetY] of offSets) {
        let newX = x + offsetX;
        let newY = y + offsetY;
        if (newX < 0 || newX >= m || newY < 0 || newY >= n) continue;
        if (getDigitSum(newX) + getDigitSum(newY) > k) continue;
        const newPos = newX * n + newY;
        if (visited.has(newPos)) continue;
        ans++;
        visited.add(newPos);
        queue.push(newPos);
      }
    }
  }
  bfs();
  return ans;
}
