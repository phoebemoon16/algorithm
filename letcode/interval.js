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

换个角度就是：「如何使得剩下互不重叠区间的数目最多」。那么答案就变为了：「总区间个数 - 不重叠区间的最多个数」。
我们的问题也变成了求所有区间中不重叠区间的最多个数。
重叠难算 但是不重叠好算 a[1] < b[0]



第二题：合并区间 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
、
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

解题思路： 会有合并的区间一起合并 所以这个不像上面 这个至少需要2和for循环
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
      i = j;
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
  arr.sort((a, b) => a[1] - b[1]); // 按照第二个数能力值升序
  let result = [];
  let n = arr.length,
    i = 0,
    j = 1;

  while (j < n) {
    if (arr[i][1] > arr[j][0]) {
      result.push(arr[j]);
      j++;
    } else {
      i = j; // i需要跳到j的位置 不能++ 如果+到已经移除的位置上就会有问题 因为移除后的位置不需要再参与运算了！！！
      j++;
    }
  }
  console.log(result);
  return result.length;
}

// 合并区间 直到所有区间不重叠
function solution2(arr) {
  arr.sort((a, b) => a[0] - b[0]);
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }
  let n = arr.length;
  let i = 0,
    j = 0,
    res = [];
  // 想错了 至少需要2个for循环 因为已经合并的区间还能和下一个区间去进行合并[1,10],[2,3],[5,8] 合并到最后就是 [1,10] 一直到合并不下去 i = j j +1继续合
  while (i < n) {
    let cur = arr[i];
    j = i + 1;
    while (j < n && arr[i][1] >= arr[j][0]) {
      cur[1] = Math.max(cur[1], arr[j][1]);
      j++;
    }
    i = j;
    res.push(cur);
  }
  return res;
}

console.log(
  solution2([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
  "--------"
);

console.log(
  solution2([
    [1, 4],
    [4, 5],
  ]),
  "--------"
);

console.log(
  solution2([
    [1, 4],
    [0, 2],
    [3, 5],
  ]),
  "--------"
);
