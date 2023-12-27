/*
 * @Author: wanghh
 * @Date: 2023-11-30 14:21:17
 * @LastEditors: wanghh
 * @LastEditTime: 2023-12-01 09:39:18
 * @Description:
 */
/**
 * 最长严格递增子序列
 * O(n log(n))
 * o(n2) 动态规划
 * 解决方案： 动态规划+贪心
 */
let arr = [
  ["A", "B", "C", "B", "D", "A", "B"],
  ["B", "D", "C", "A", "B", "C"],
];
console.log(arr[0][6], arr[1][5]);

let length1 = 7;
let length2 = 6;
// 创建一个length1 + 1个二维数组，每个数组里面有length2+1个0
const dp = new Array(length1 + 1).fill(new Array(length2 + 1).fill(0));
console.log(dp, "dp");

function max(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;
  const dp = new Array(length1 + 1).fill(new Array(length2 + 1).fill(0));
  for (i = 1; i <= length1; i++) {
    for (j = 1; j <= length2; j++) {
      // 如果元素是相等，那么只需要判断左上角元素+1
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        // 如果元素不等，就取左边和上边的最大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[length1][length2];
}

let maxLength = max("ABCBDAB", "BDCABC");
console.log(maxLength, "maxLength");

// 找到一串数字里面 最长严格递归子序列 动态规划 O(n*n)
function maxStrLength(nums) {
  let dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
}

let str1 = maxStrLength("23427");
console.log(str1, "str1");

// 贪心+二分查找
