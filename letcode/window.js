/** 滑动窗口 
 * 
 * 
 * https://leetcode.cn/problems/sliding-window-maximum/solutions/543818/ji-shu-shuang-duan-fen-kuai-you-xian-5xi-87ud/
 三 分块
将数组分成k块
指针j → 统计每块内从块开头到j最大值
指针i ← 统计每块内从块结尾到i最大值
滑动区间[i, i + k - 1]最大值 = 某块结尾到i最大值 与 某块开头到i + k - 1最大值 取大

*/
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
