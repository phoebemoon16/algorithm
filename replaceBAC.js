/*
 * @Author: wanghh
 * @Date: 2023-12-14 16:57:41
 * @LastEditors: wanghh
 * @LastEditTime: 2023-12-14 17:01:26
 * @Description:
 */
/**
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
      //    -location 也可以加
      result[++location] = cur;
    }
  }
  return result.slice(0, location + 1).join("");
}

console.log(solution("aabbc"));
