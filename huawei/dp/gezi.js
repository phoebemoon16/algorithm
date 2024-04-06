/*
 * @Author: wanghh
 * @Date: 2024-01-10 08:21:42
 * @LastEditors: wanghh
 * @LastEditTime: 2024-01-10 08:46:54
 * @Description:
 */
/**
 * 
 * 小明和朋友们一起玩跳格子游戏，

每个格子上有特定的分数 score = [1, -1, -6, 7, -17, 7]，

从起点score[0]开始，每次最大的步长为k，请你返回小明跳到终点 score[n-1] 时，能得到的最大得分。

输入描述
第一行输入总的格子数量 n
第二行输入每个格子的分数 score[i]
第三行输入最大跳的步长 k

输出描述
输出最大得分

备注
格子的总长度 n 和步长 k 的区间在 [1, 100000]
每个格子的分数 score[i] 在 [-10000, 10000] 区间中
用例1
输入
6
1 -1 -6 7 -17 7
2
输出
14
说明
输出最大得分数，小明从起点score[0]开始跳，第一次跳score[1],第二次跳到score[3],第三次跳到score[5]，因此得到的最大的得分是score[0] + score[1] + score[3] + score[5] = 14
 
题目解析有点像动态规划 但是又有点不太一样
dp[n] = Math.max(...dp[n-2],dp[n-1]) + score[n]
*/

function solution(arr, num) {
  let dp = new Array(arr.length).fill(0);
  dp[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let maxScore = 0;
    // 只考虑之前的num个格子 因为这是最大步 超过了这个范围就不能一次跳跃成功了
    for (let j = Math.max(0, i - num); j < i; j++) {
      maxScore = Math.max(maxScore, dp[j] + arr[i]);
    }
    dp[i] = maxScore; // 意思为跳到第i步 所需要的最大步数 求出i上每一个的最大步数 最后输出最后一个即可
  }
  console.log(dp, "dp000");
  return dp[arr.length - 1];
}

console.log(solution([1, -1, -6, 7, -17, 7], 2));
