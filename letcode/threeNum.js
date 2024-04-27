/**
 * 
 * {给定一个包含 n 个整数的数组 array，判断 array 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。
示例 1：

输入：array = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：array = []
输出：[]
示例 3：

输入：array = [0]
输出：[]
 } array 
 * @returns 
 */

//  此种解法的问题是 一个元素会被多次利用 返回的path是会有重复的  适合求解所有可能路径的做法
function solution(array) {
  // 1.得到所有可能组合情况之和
  let result = [];
  function backTrack(start, path) {
    if (
      path.length === 3 &&
      path.reduce((a, b) => Number(a) + Number(b)) == 0
    ) {
      result.push([...path]);
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


//  此种解法的问题是超时了  
function solution2(array) {
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

// 解法三： 用双指针去解决 这个才是最靠谱 最好的解决方案
function solution3(array) {
  if (array.length < 3) return []
  array.sort((a, b) => a - b)
  let result = []

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] > 0) break
    // 去重
    if (i > 0 && array[i] === array[i - 1]) continue
    let start = i + 1
    let end = array.length - 1
    while (start < end) {
      let sum = array[i] + array[start] + array[end]

      if (sum > 0) {
        end--
        //  去重
        while (start < end && array[end + 1] == array[end]) {
          end--;
        }
      }
      if (sum < 0) {
        start++
        // 去重
        while (start < end && array[start - 1] == array[start]) {
          start++;
        }
      }
      if (sum === 0) {
        result.push([array[i], array[start], array[end]])
        start++
        end--
        // 去重 每走一步就要去重
        while (start < end && array[start - 1] == array[start]) {
          start++;
        }
        while (start < end && array[end + 1] == array[end]) {
          end--
        }

      }
    }

  }
  return result
}

console.log(solution2([-1, 0, 1, 2, -1, -4]));
console.log(solution3([-1, 0, 1, 2, -1, -4]))