/**
 * 给定一个不含重复数字的数组 nums ，返回其所有可能的全排列 。你可以 按任意顺序返回答案。
 * 
 * 输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

输入：nums = [0,1]
输出：[[0,1],[1,0]]
 *  */

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
