/** 题目描述：
给定一个含有N个正整数的数组,求出有多少个连续区间(包括单个正整数),它们的和大于等于x。

输入描述：
第一行两个整数N和x(0<N<= 100000,0<=x<= 10000000)
第二行有N个正整数(每个正整数小于等于100)。

输出描述：
输出一个整数，表示所求的个数。

输入：
3 7
3 4 7

输出：4  // 3 4 | 3 4 7 | 4 7 | 7

解法：1.简单粗暴 2个for
2.双指针 left right left最小 right:left+1
 */
function solution(array, sum) {
  let left = 0;
  let right = 1;
  let result = [];
  let tempSum = array[left];
  while (left < array.length) {
    tempSum += array[right];
    if (tempSum >= sum && right < array.length) {
      result.push(array.slice(left, right + 1)); // 选中一个left right从头走到尾
      right++;
    } else {
      left++;
      right = left === array.length - 1 ? left : left + 1;
      console.log(left, right, "right22");
      tempSum = left === array.length - 1 ? 0 : array[left]; // 最后一个元素不取left 取right的 因为left == right 再取就多了一个
    }
  }
  return result;
}
console.log(solution([3, 4, 0, 7], 7));
console.log(solution([3, 4, 7], 7));

// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10000));
