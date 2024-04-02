/*
 * @Author: wanghh
 * @Date: 2024-04-02 16:19:35
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-02 17:05:06
 * @Description:
 */
/** 题目描述:
"吃货"和"馋嘴"两人到披萨店点了一份铁盘(圆形)披萨，并嘱咐店员将披萨按放射状切成大小相同的偶数个小块。但是粗心的服务员将披萨切成了每块大小都完全不同奇数块，且肉眼能分辨出大小。
由于两人都想吃到最多的披萨，他们商量了一个他们认为公平的分法:从"吃货"开始，轮流取披萨。除了第一块披萨可以任意选取外，其他都必须从缺口开始选。
有n块披萨排成一个圆环状，每块披萨有一个美味值。现在你可以从任意一块披萨开始，每次选择吃掉左边或右边的披萨，但不能跳过披萨。求最多能吃到的披萨的美味值总和。

输入描述:
第1行为一个正整数奇数 N，表示披萨小块数量
3 <= N <= 500
接下来的第2行到第N+1行(共N 行)，每行为一个正整数，表示第i块披萨的大小
1 <= i <= N
披萨小块从某一块开始，按照一个方向次序顺序编号为1~N
每块披萨的大小范围为[1,2147483647]

输出描述:
"吃货"能分得到的最大的披萨大小的总和。

用例
输入：
5
8
2
10
5
7
输出：
19
说明：
此例子中，有5块披萨。每块大小依次为 8、2、10、5、7。
按照如下顺序拿披萨，可以使"吃货"拿到最多披萨:“吃货”拿大小为 10 的披萨
“馋嘴”拿大小为 5 的披萨
“吃货”拿大小为 7 的披萨
“馋嘴”拿大小为 8 的披萨
“吃货”拿大小为 2 的披萨
至此，披萨瓜分完毕，"吃货"拿到的披萨总大小为10+7+2=19
可能存在多种拿法，以上只是其中一种。 

输入： 5块 [8,2,10,5,7]

吃货 第一次取10 选最大的  馋嘴在2 5里面选5 递归+缓存优化
*/
function solution(n, array) {
  // 先求array里面最大值 并得出其index

  // 相邻 a b选最大
  function choiceBig(start, end) {
    if (start === end) {
      return array[start];
    }
    if (end - start === 1) {
      return Math.max(array[start], array[end]);
    }
    //
    const chooseFirst =
      array[start] +
      Math.min(choiceBig(start + 2, end), choiceBig(start + 1, end - 1));
    const chooseLast =
      array[end] +
      Math.min(choiceBig(start, end - 2), choiceBig(start + 1, end - 1));
    // 返回两种情况中的较大值
    return Math.max(chooseFirst, chooseLast);
  }
  return choiceBig(0, n - 1);
}
console.log(solution(5, [8, 2, 10, 5, 7]));

console.log(maxPizzaSum([8, 2, 10, 5, 7]));
function maxPizzaSum(nums) {
  return Math.max(
    // "吃货"选择第一块披萨，然后递归计算另一个玩家在剩余披萨序列上可以获得的最小披萨总和
    nums[0] + Math.min(pizzaSum(nums.slice(2)), pizzaSum(nums.slice(1, -1))),
    // "吃货"选择最后一块披萨，然后递归计算另一个玩家在剩余披萨序列上可以获得的最小披萨总和
    nums[nums.length - 1] +
      Math.min(pizzaSum(nums.slice(1, -1)), pizzaSum(nums.slice(0, -2)))
  );
}

// 计算另一个玩家在剩余披萨序列上可以获得的最小披萨总和
function pizzaSum(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return Math.min(maxPizzaSum(nums), maxPizzaSum(nums.slice(1)));
}
