/**
 * 给定一个不含重复数字的数组 nums ，返回其所有可能的全排列 。你可以 按任意顺序返回答案。
 * 
 * 输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

输入：nums = [0,1]
输出：[[0,1],[1,0]]
 *  */

// 不重复数字 和不重复字母也是一样的 都可以采用此回溯的方法
function solution(array) {
  let result = [];
  function backTrack(path) {
    if (path.length === array.length) {
      result.push(path.slice());
      return;
    }
    // 另一种做法
    // array.forEach((item) => {
    //   console.log(item, path,'item000')
    //   if (path.includes(item)) return; //不包含重复的数字
    //   backTrack([...path, item]); //加入路径，继续递归选择
    // });
    // forEach   和 for 循环的 return的含义是不一样的！！！ forEach 是跳出当前循环 后面的还可以继续执行 for循环 return 是跳出此循环 后面的都不继续执行！！！！
    for (let i = 0; i < array.length; i++) {
      if (!path.includes(array[i])) {
        backTrack([...path, array[i]]);
      }
      // if(path.includes(array[i])) {
      //   return
      // }
      // backTrack([...path, array[i]]);
    }
  }
  backTrack([]);
  return result;
}
console.log(solution([1, 2, 3]));
console.log(solution(["a", "g", "e", "w"]));

/** 
// 重复数字 的全排列
输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
注意下：重复的数字不能一直重复 比如111 每个数字出现的次数必须跟数组中的数字出现的次数相等才行
 */
function solution2(array) {
  let result = [];
  array.sort((a, b) => a - b);
  const vis = new Array(array.length).fill(false);
  function backTrack(idx, path) {
    if (idx === array.length) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < array.length; i++) {
      // 保证在填第 idx\textit{idx}idx 个数的时候重复数字只会被填入一次即可
      // 然后每次填入的数一定是这个数所在重复数集合中「从左往右第一个未被填过的数字!!」 2个for循环去进行判断
      if (vis[i] || (i >= 0 && array[i] === array[i - 1] && !vis[i - 1])) {
        continue;
      }
      vis[i] = true;
      path.push(array[i]);
      backTrack(idx + 1, path);
      vis[i] = false;
      path.pop();
      // if(path.includes(array[i])) {
      //   return
      // }
      // backTrack(idx +1, [...path, array[i]]);
    }
  }
  backTrack(0, []);
  return result;
}
//
console.log(solution2([1, 2, 1]));
