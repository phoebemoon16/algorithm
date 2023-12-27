/*
 * @Author: wanghh
 * @Date: 2023-03-09 10:00:09
 * @LastEditors: wanghh
 * @LastEditTime: 2023-03-09 10:02:18
 * @Description:
 */
/**
 * 任意一个偶数（大于2）都可以由2个素数组成，组成偶数的2个素数有很多种情况，本题目要求输出组成指定偶数的两个素数差值最小的素数对。
 *
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let sum = parseInt(line);
    // 判断是不是素数 素数只能被1和自己整除
    function isSushu(a) {
      let flag = true;
      if (a == 1) return true;
      for (let i = 2; i < a; i++) {
        if (a % i === 0) {
          flag = false;
        }
      }
      return flag;
    }
    // 从中间开始找最接近， 我开始傻傻从两头开始找 中间找是最接近的！！
    for (let i = sum / 2; i >= 2; i--) {
      if (isSushu(i) && isSushu(sum - i)) {
        console.log(i);
        console.log(sum - i);
        break;
      }
    }
  }
})();
