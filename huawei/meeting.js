/** 会议占用时间 
 * 题目描述
现有若干个会议，所有会议共享一个会议室，用数组表示各个会议的开始时间和结束时间，格式为：

[[会议1开始时间, 会议1结束时间], [会议2开始时间, 会议2结束时间]]

请计算会议室占用时间段。

输入描述
第一行输入一个整数 n，表示会议数量
之后输入n行，每行两个整数，以空格分隔，分别表示会议开始时间，会议结束时间

输出描述
输出多行，每个两个整数，以空格分隔，分别表示会议室占用时间段开始和结束

备注
会议室个数范围：[1, 100]
会议室时间段：[1, 24]
用例1
输入
4
1 4
2 5
7 9
14 18
输出
1 5
7 9
14 18
说明
输入：[[1,4],[2,5],[7,9],[14,18]]
输出：[[1,5],[7,9],[14,18]]
说明：时间段[1,4]和[2,5]重叠，合并为[1,5]

用例2
输入
2
1 4
4 5
输出
1 5
说明
输入：[[1,4],[4,5]]
输出：[[1,5]]
说明：时间段[1,4]和[4,5]连续

解题思路： 合并重叠时间 区间合并问题
1.先排序 按按照开始时间排序  题目中没有说有序 就需要我们自己排序
*/
function solution(arr) {
  arr = arr.sort((a, b) => {
    return a[0] - b[0];
  });
  let result = [];
  let pre = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    if (cur[0] <= pre[1]) {
      pre[1] = Math.max(pre[1], cur[1]);
    } else {
      result.push(pre);
      pre = cur;
    }
  }
  result.push(pre);
  return result;
}

console.log(
  solution([
    [1, 4],
    [4, 5],
  ])
);
console.log(
  solution([
    [1, 4],
    [2, 5],
    [7, 9],
    [14, 18],
  ])
);
console.log(
  solution([
    [1, 4],
    [7, 9],
    [14, 18],
  ])
);