/** 题目描述:
寻找给定整数n的连续整数和的分解。找到一个连续整数序列，使得这些连续整数的和等于给定的整数n。
如果找到了这样的连续整数序列，程序会返回这个序列；如果找不到，则返回"N"。

主要逻辑是通过遍历可能的连续整数个数m，然后找到满足条件的起始整数x，使得从x开始的m个连续整数之和等于n。
如果找到了这样的整数序列，就会构建一个包含这些整数的字符串并返回；如果找不到，则返回"N"。

输入描述:
输入数据为一个整数，范围为(1,2^30]

输出描述:
使用字符串拼接的方式构建输出字符串

输入： 21
输出： 21 = 10+ 11

21 = 1+2+3+4+5+6
21 = 6+7+8
21 = 10+11  10 11组成的数是最小的 所以可以输出这个

解题思路：
1. 连续数字之和等于此数字 
我的思路是不是 
奇数 可以取其中间的2个数 21 / 2 = 10 11
偶数： 22 4+5+6+7 44/11

直接做滑动窗口做是会超时的


还不如奇数直接求出答案
偶数用滑动窗口做 循环条件可以设为是 < n/2 且从最大开始去查 查到就返回 因为从最大去取 一定是相对较小的
*/

function solution(num) {
  // N 是不能大于2的30次方的
  if (num > Math.pow(2, 30)) {
    return;
  }
  if (num % 2 === 1) {
    // Math.floor 向下取整
    return `${num} = ${Math.floor(num / 2)} + ${Math.floor(num / 2) + 1}`;
  } else {
    let result = findIndexmin(num);
    let result2 = findIndexmax(num);
    return [result, result2];
  }
}

//从最小的开始
function findIndexmin(num) {
  let result = [];
  let low = 1;
  let high = 2;
  let sum = low + high;
  while (low < high) {
    if (high > num / 2 && sum !== num) return "N"; // 如果最右的指针大于偶数的一半 还没有找到 就返回N
    if (sum === num) {
      for (let i = low; i <= high; i++) {
        result.push(i);
      }
      return result;
    } else if (sum < num) {
      high++;
      sum += high;
    } else {
      sum -= low;
      low++;
    }
  }
}

// 从最大的开始  可以得出最优解 节省时间
function findIndexmax(num) {
  let result = [];
  let low = num / 2 - 1;
  let high = num / 2;
  let sum = low + high;
  while (low > 0) {
    if (sum === num) {
      for (let i = low; i <= high; i++) {
        result.push(i);
      }
      return result;
    } else if (sum < num) {
      //   high++;
      low--;
      sum += low;
    } else {
      sum -= high;
      high--;
    }
  }
  return "N"; // 如果low小于0 还是找不到 就返回N 表示未找到
}
// console.log(solution(21));
// console.log(solution(22));
// // 4 5 6 7 8 || 6 7 8 9 都可以 但是选最短的 所以要选6 7 8 9 手算还是错了 最短是9 10 11这个算法可以实现就看超不超时了
// console.log(solution(30));
console.log(solution(4));
