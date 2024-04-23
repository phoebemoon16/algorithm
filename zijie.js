/*
 * @Author: wanghh
 * @Date: 2023-12-14 16:57:41
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-23 09:51:35
 * @Description:
 */
/**
 *
 * https://www.cnblogs.com/SteelArm/p/12773014.html 具体详解
 * 消除字符串里面的b ac模块
 */
function solution(str) {
  let result = str.split("");
  let location = -1;
  for (let i = 0; i < str.length; i++) {
    let cur = result[i];
    if (cur === "c" && location >= 0 && result[location] === "a") {
      location--;
    } else if (cur !== "b") {
      // ++location 先加1 再把当前字符赋值给此位置 我们最后要返回的长度就是 location的长度 所以要把符合条件的尽量放在最前面
      result[++location] = cur;
      // ++location; 这个没有考虑到后面会符合条件的字符
    }
  }
  console.log(location, "result[++location]1111");
  return result.slice(0, location + 1).join("");
}

console.log(solution("aabbc"));
console.log(solution("aaabbbccc"));
console.log(solution("abcdcba"));

/**
 * 求最长无重复字符的子序列
 *
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let res = 0;
  let map = new Map();
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(s[r], r); // 存放字符里的每一个字符和下标
  }
  return res;
};

console.log(lengthOfLongestSubstring(" "), " ".length);
console.log(lengthOfLongestSubstring("1"));
