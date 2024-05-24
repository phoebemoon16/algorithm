/*
 * @Author: wanghh
 * @Date: 2024-04-30 11:15:31
 * @LastEditors: wanghh
 * @LastEditTime: 2024-05-24 15:53:12
 * @Description:
 */
/** 滑动窗口 求得最大值
 * https://leetcode.cn/problems/sliding-window-maximum/solutions/543818/ji-shu-shuang-duan-fen-kuai-you-xian-5xi-87ud/
 */
// 此解法当队列的值超过一定数量时就会报错
function maxSlidingWindow(nums, k) {
  let currentArray = [];
  if (nums.length < k) {
    return Math.max(...nums);
  }
  for (let i = 0; i < k; i++) {
    currentArray.push(nums[i]);
  }
  let right = k;
  let result = [];
  result.push(Math.max(...currentArray));
  while (right < nums.length) {
    currentArray.shift();
    currentArray.push(nums[right]);
    result.push(Math.max(...currentArray));
    right++;
  }
  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

/**   
 * 
 * https://www.cxyxiaowu.com/14367.html
 * 
 * 就很像队列 ：一端进入 另一端移出 双向队列 以及 单调队列
  当队首元素在原数组中的下标小于窗口左边界时，队首元素就需要移除队列。

  设置一个队列 队列是当前窗口里的排序 从大到小排序
  1.遍历数组中的元素 如果队列不为空且考察元素大于等于队尾元素，则将队尾元素移除。
  2.当队首元素大于窗口左侧的index时，就要移除队首。
  3.从数组0开始，当窗口右边界right+1大于等于窗口大小K时，意味着窗口行成，
  此时，队首元素就是当前窗口的最大值 将最大值取出放在数组里即可。
  */
function solution2(nums, k) {
  let queue = [0]; // 存储元素大小的下标
  let res = [];
  let right = 1;
  // 当K长度为1 或者元素长度为1的时候 都直接但会nums
  if (nums.length === 1 || k === 1) {
    return nums;
  }
  while (right < nums.length) {
    // if是有问题的 不能之和最后一个判断 要循环一下直到找到大于他无法修改的数组 这个判断是需要循环的 因为 -1 -2 5 新增的元素是比前2个都要大的元素
    // if (queue.length > 0 && nums[right] > nums[queue[queue.length - 1]]) {
    //   queue.pop();
    // }
    while (queue.length > 0 && nums[right] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(right);
    // 求出left 如果left是大于第一个元素的下标的话 就需要移除队列第一个元素
    let left = right - k + 1;
    if (queue[0] < left) {
      queue.shift();
      // left++;
    }
    // +1 是因为下标为0 从0开始
    if (right + 1 >= k) {
      // console.log(queue, "queuequeue");
      res.push(nums[queue[0]]);
    }
    right++;
  }
  return res;
}

console.log(solution2([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(solution2([1], 1));
