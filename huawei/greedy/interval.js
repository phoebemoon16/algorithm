/** 给你一个区间 让你求移除部分区间，剩下的区间互不重叠 返回区间的最小值
 * 
 * 输入：intervals = [[1,2],[2,3],[3,4],[1,3]]
输出：1
解释：移除 [1,3] 后，剩下的区间没有重叠。

输入: intervals = [ [1,2], [1,2], [1,2] ]
输出: 2
解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。

解题思路：
1.先按数组的第一个元素排序，然后渲染求其是否重叠 重叠的话 将区间范围值大的移除掉（区间范围大 就说明可重叠的会多）

注意！！！ 移除最小数量 
2. 判断是否重叠 [1, 100] [2, 99]  [1, 4] [2, 3 ]
a[1] > b[0] &&  重叠
 **/

// 此解法可以移除 但是移除的不是最小的！！！ 想要最小 排序第二位数升序
function solution(arr) {
  if (!arr.length) {
    return 0;
  }
  arr.sort((a, b) => a[0] - b[0]);
  let result = [];
  let n = arr.length,
    i = 0,
    j = 1;

  while (j < n) {
    if (arr[i][1] > arr[j][0]) {
      result.push(arr[j]);
      j++;
    } else {
      i++;
      j++;
    }
  }
  console.log(result);
  return result.length;
}

console.log(
  solution([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);

console.log(
  solution([
    [1, 2],
    [2, 3],
  ])
);

console.log(
  solution([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
);

// [[1,100],[1,11],[11,22],[2,12]]
console.log(
  solution([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12],
  ])
);

console.log(
  solution([
    [0, 2],
    [1, 3],
    [2, 4],
    [3, 5],
    [4, 6],
  ])
);

// [[0,2],[1,3],[2,4],[3,5],[4,6]]
function solution(arr) {
  if (!arr.length) {
    return 0;
  }
  arr.sort((a, b) => a[1] - b[1]);
  let result = [];
  let n = arr.length,
    i = 0,
    j = 1;

  while (j < n) {
    if (arr[i][1] > arr[j][0]) {
      result.push(arr[j]);
      j++;
    } else {
      i = j; // i需要跳到j的位置 不能++ 如果+到已经移除的位置上就会报错！！！
      j++;
    }
  }
  console.log(result);
  return result.length;
}
