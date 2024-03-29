/*
 * @Author: wanghh
 * @Date: 2024-03-07 10:01:07
 * @LastEditors: wanghh
 * @LastEditTime: 2024-03-07 11:03:21
 * @Description:
 */
// 请设计一个 combinations 函数，它接收一个数字数组，要求返回这些数字的所有可能组合情况。
function combinations(nums) {
  /**
   *i从0-3 都不执行console.log(current, "222")以及以下步揍
   等i不符合循环条件后再回溯执行 从i为2开始执行console.log(current, "222")及以下步揍
   等到执行i = 0后回溯完成
   则就继续for循环再回溯 知道回溯到i和start相等 就停止回溯
   *
   * @param {*} current
   * @param {*} start
   */
  function backtrack(current, start) {
    console.log(result, current, start, "backtrack,backtrack");
    result.push([...current]);

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);
      console.log(current, i, "111");
      backtrack(current, i + 1);
      console.log(current, "222");
      current.pop(); // 回溯到上一步 而不是回溯到第一步 等到backtrack中for循环遍历完所有的数字后执行
      console.log(current, "333");
    }
  }
  backtrack([], 0);
  return result;
}

console.log(combinations([1, 2, 3]), "111111");
