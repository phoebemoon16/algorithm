/** 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

解题思路 一下子跳到最大 不然再慢慢减少

示例 1：

输入：nums = [2,3,1,1,4]
输出：true
解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。
示例 2：

输入：nums = [3,2,1,0,4]
输出：false
解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。

解题思路 用当前i + num[i] 是否大于长度 大于就可到达终点  否则无法到达终点
*/
function solution(array) {
  let maxStep = 0;
  for (let i = 0; i < array.length; i++) {
    if (i <= maxStep) {
      // 说明最多可跳到maxStep步数 每次都取最大值
      maxStep = Math.max(maxStep, i + array[i]);
      // 当前最大步数大于总长度 说明可以跳完
      if (maxStep >= array.length - 1) return true;
    }
  }
  return false;
}
console.log(solution([3, 2, 1, 0, 4]));
console.log(solution([2, 3, 1, 1, 4]));
