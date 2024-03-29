/**
 * 
 * 
字符串拼接：
给定 M（0 < M ≤ 30）个字符（a-z），从中取出任意字符（每个字符只能用一次）拼接成长度为 N（0 < N ≤ 5）的字符串，

要求相同的字符不能相邻，计算出给定的字符列表能拼接出多少种满足条件的字符串，
输入非法或者无法拼接出满足条件的字符串则返回0。
输入描述
给定的字符列表和结果字符串长度，中间使用空格(" ")拼接
输出描述
满足条件的字符串个数

用例1
输入
abc 1
输出
3
说明
给定的字符为a,b,c，结果字符串长度为1，可以拼接成a,b,c，共3种

用例2
输入
dde 2
输出
2
说明
给定的字符为dde，结果字符串长度为2，可以拼接成de,ed，共2种

解题：
首先重复的字符不相邻，需要对字符排序
根据给定的字符长度进行输出

 */
function solution(str, n) {
  let arr = str.split("").sort().join("");
  // let dp = new Array(str.length).fill(0).map(() => new Array(n).fill(0))
  let resultAll = [];
  function generateStrings(currentString, remainChars, result) {
    if (currentString.length === n) {
      result.push(currentString);
      return;
    }
    for (let i = 0; i < remainChars.length; i++) {
      if (i > 0 && remainChars[i] === remainChars[i - 1]) {
        continue;
      }
      if (currentString === remainChars[i]) {
        continue;
      }
      console.log(
        currentString + remainChars[i],
        remainChars.slice(0, i) + remainChars.slice(i + 1),
        i,
        "iiii"
      );
      generateStrings(
        currentString + remainChars[i],
        remainChars.slice(0, i) + remainChars.slice(i + 1),
        result
      );
    }
  }
  generateStrings("", arr, resultAll);
  return resultAll;
}

console.log(solution("bbe", 2));
console.log(solution("bbb", 2));
console.log(solution("abc", 2));
