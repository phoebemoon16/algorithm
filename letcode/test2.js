/*
 * @Author: wanghh
 * @Date: 2024-05-16 09:31:29
 * @LastEditors: wanghh
 * @LastEditTime: 2024-05-28 08:54:13
 * @Description:
 */
/**
 * 滑动窗口 K
 * @param {} array
 * [1,3,-1,-3,5,3,6,7]
 */
//  此解法不行 当数据量太大时 会超时 需要修改一下
function solution(array, k) {
  let result = [];
  let currentArray = [];
  for (let i = 0; i < k; i++) {
    currentArray.push(array[i]);
  }
  result.push(Math.max(...currentArray));
  let right = k;
  while (right < array.length) {
    currentArray.shift();
    currentArray.push(array[right]);
    result.push(Math.max(...currentArray));
    right++;
  }
  return result;
}

console.log(solution([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(solution([1, -1], 1));

// 第二种解法， 可以用队列去做
function solution2(nums, k) {
  let queue = [0];
  let res = [];
  let right = 1;
  while (right < nums.length) {
    while (queue.length > 0 && nums[right] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(right);
    let left = right - k + 1;
    if (queue[0] < left) {
      queue.shift();
    }
    if (right + 1 > k) {
      res.push(queue[0]);
    }
    right++;
  }
  return res;
}
