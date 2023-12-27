/*
 * @Author: wanghh
 * @Date: 2023-12-08 10:25:23
 * @LastEditors: wanghh
 * @LastEditTime: 2023-12-08 11:24:47
 * @Description: 求最长不含重复字符的子字符串
 * 我的思路还是动态规划做 这个就很像 求最长连续的子串
 */

function maxfreMethods(str) {
  let dp = new Array(str.length).fill(0);
  dp[0] = 1;
  j = -1;
  for (let i = 0; i < str.length; i++) {
    // j表示i下标的元素第一次出现的位置，我们要i-j, 获取到i+ - j的元素
    let j = dp.findIndex((item) => str[i] === item);
    // 要当前这个位置： dp[i-1] + 1
    dp = Math.max(dp[i - 1] + 1, i - j);
  }
}

// 我当时做法 map的has 性能要远远大于 indexOf/includes
function maxfreMethods2(str) {
  let dp = [];
  let tempStr = "";
  for (let i = 0; i < str.length; i++) {
    if (tempStr.includes(str[i])) {
      dp.push(tempStr.length);
      tempStr = str[i]; // 将tempStr设置成当前值，从当前值再次出发
    } else {
      tempStr += str[i];
    }
  }
  return Math.max(...dp);
}
console.log(maxfreMethods2("pwwkew"));

function solutin(str) {
  const map = new Map();
  let longestLen = 0;
  let lIndex = 0;
  let rIndex = 0;
  while (rIndex < str.length) {
    let currentStr = str[rIndex];
    const searchedIndex = map.get(currentStr);
    if (searchedIndex === undefined) {
      map.set(currentStr, rIndex);
      longestLen = Math.max(map.size, longestLen);
    } else {
      // 遇到重复字符了  lIndex移到searchedIndex的位置 就是重复字符的初始位置
      while (lIndex <= searchedIndex) {
        map.delete(str[lIndex]);
        lIndex++;
      }
      // 再把当前的set进map
      map.set(currentStr, rIndex);
      //  如果列表（map里面存的是不重复的字段value:index）的长度+未遍历的长度都小于 最长列表的列表 就可以不遍历了 减少 一部分开销
      if (map.size + (str.length - rIndex - 1) <= longestLen) {
        break;
      }
    }
    rIndex + 1;
  }
  return longestLen;
}
