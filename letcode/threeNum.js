/**
 * 
 * {给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。
示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 } array 
 * @returns 
 */

function solution(array) {
  // 1.得到所有可能组合情况之和
  let result = [];
  function backTrack(start, path) {
    if (
      path.length === 3 &&
      path.reduce((a, b) => Number(a) + Number(b)) == 0
    ) {
      let tempPath = JSON.parse(JSON.stringify(path)).sort((a, b) => a - b);
      if (
        !result.some((arr) => JSON.stringify(arr) === JSON.stringify(tempPath))
      )
        result.push([...tempPath]);
      return;
    }
    if (path.length === 3) {
      return;
    }
    // 递归+回溯 直到所有的组合都获取到
    for (let i = start; i < array.length; i++) {
      path.push(array[i]);
      backTrack(i + 1, path);
      path.pop();
    }
  }
  backTrack(0, []);

  return result;
}

console.log(solution([-1, 0, 1, 2, -1, -4]));
