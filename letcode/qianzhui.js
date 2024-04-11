/*
 * @Author: wanghh
 * @Date: 2024-04-09 14:45:55
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-09 15:03:15
 * @Description:
 * 最长公共前缀序列
 *
 * 简单做法：
 * 1. 2个for循环
 * 2. 二分查找最长前缀
 */
function longestCommonPrefix(strs) {
  console.log(strs);
  let resultStr = "";
  if (strs == null || strs.length == 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  for (let j = 0; j < strs[0].length; j++) {
    let str = strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (str !== strs[i][j] || !strs[i][j]) {
        return resultStr;
      } else if (i === strs.length - 1) {
        resultStr += str;
      }
    }
  }
  return resultStr;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["f"]));
console.log(longestCommonPrefix(["ft"]));
