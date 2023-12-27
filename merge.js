/**
 * 合并区间给出一组区间，请合并所有重叠的区间。请保证合并后的区间按区间起点升序排列。
 * 输入：[[10,30],[20,60],[80,100],[150,180]]
   返回值：[[10,60],[80,100],[150,180]]
   合并情况： 10 - 30 20 -60 就将60赋值给最右边
   2.如果 10 - 30 15-25 则原来保持不变
   只有一个for循环是不够的，至少需要2个
 *  */
// 思路一： 先将数据进行一个排序 按照每个区间的start的大小开始排
// let arr = [
//   [10, 30],
//   [20, 60],
//   [80, 100],
//   [150, 180],
// ];

let arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

let arr2 = [
  [1, 4],
  [1, 4],
];

let sortArr = arr2.sort((a, b) => a[0] - b[0]);
let result = [];
let i = 0;
const length = sortArr.length;
while (i < length) {
  const current = sortArr[i];
  let next = i + 1;
  //   只要后面一个的第一个数大于前面的最后一个数 就可以循环
  while (next < length && sortArr[i][1] >= sortArr[next][0]) {
    current[1] = Math.max(sortArr[i][1], sortArr[next][1]);
    next++;
  }
  i = next;
  result.push(current);
}
console.log(result);
