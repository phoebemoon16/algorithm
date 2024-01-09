/**
 * 一只贪吃的猴子，来到一个果园，发现许多串香蕉排成一行，每串香蕉上有若干根香蕉。每串香蕉的根数由数组numbers给出。

猴子获取香蕉，每次都只能从行的开头或者末尾获取，并且只能获取N次，求猴子最多能获取多少根香蕉。

输入描述
第一行为数组numbers的长度

第二行为数组numbers的值每个数字通过空格分开

第三行输入为N，表示获取的次数

输出描述
按照题目要求能获取的最大数值

备注
1 ≤ numbers.length ≤ 100000
1 ≤ numbers ≤ 100
1 ≤ N ≤ numbers.length
用例1
输入
7
1 2 2 7 3 6 1
3
输出
10
说明
第一次获取香蕉，无论是从行的开头或者末尾获取，得到的香蕉根数目为1, 但是，从行末尾获取能获取到最优的策略，后面可以直接得到香蕉根数目6和3。因此最终根数为1+6+3=10

用例2
输入
3
1 2 3
3
输出
6
说明
全部获取所有的香蕉，因此最终根数为1+2+3=6

用例3
输入
4
4 2 2 3
2
输出
7
说明
第一次获取香蕉为行的开头，第二次获取为行的末尾，因此最终根数为4+3=7
 */

function solution(arr, n) {
  // 可以先假设从一头开始吃 得到一个值 再定义2个指针 一个从另外一头开始 一个在这头 移动n个 找到最大的值
  let rightNum = 0;
  for (let i = arr.length - n; i < arr.length; i++) {
    rightNum += arr[i];
  }

  // 又忘记了 需要记住极限情况
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
