/**
 * 
 * 
 * https://blog.csdn.net/qfc_128220/article/details/135049306?spm=1001.2014.3001.5501
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

滑动窗口 去取出里面最大值

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

/**
 * 题目描述:
幼儿园组织活动，老师布置了一个任务:
每个小朋友去了解与自己同一个小区的小朋友还有几个。
我们将这些数量汇总到数组garden中。
计算班级小朋友至少来自几个小区？

输入描述:
输入:读取一行输入，然后将输入按空格分割，每个部分表示和自己同一个小区的孩子数量
注意：
1.garden数组长度最大为 999
2.每个小区的小朋友数量最多1000人，也就是 garden[i] 的范围为 [0,999]

输出描述:
输出计算得到的最少需要的小区数量

用例
输入：
2 2 3
输出：
7
说明;
第一个小朋友反馈有两个小朋友和自己同一小区，即此小区有3个小朋友。
第二个小朋友反馈有两个小朋友和自己同一小区，即此小区有3个小朋友。
这两个小朋友，可能是同一小区的，且此小区的小朋友只有3个人。
第三个小区反馈还有3个小朋友与自己同一小区，则这些小朋友只能是另外一个小区的。这个小区有4个小朋友。
 */


function friends(array){
  if (array.length > 999) {
    return
  }
  array = array.sort((a,b) => a - b)
  array = [...new Set(array)]
  console.log(array, 'array')
  // 最后一个参数表示初始值（initialValue），也就是初始的累加器值。如果不提供初始值，则默认使用数组的第一个元素作为初始值，然后从数组的第二个元素开始进行累加。
  return array.reduce((acc, cur) => acc + (cur + 1), 0)
}

console.log(friends([2,2,3]))