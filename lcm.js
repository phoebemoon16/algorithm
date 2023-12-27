/**
 * 求2个数的最小公倍数
 * 1.先吧参数进行一个按顺序排序
 * 2.如果最大的数能整除最小的数，那么最小公倍数就是最大数字 2 4 3 6
 * 3.如果不能整除 则用递归的方法
 * a % b = c 再 b % c 直到最后的取余为0 那c就是最小公约数a*b/c 就是最大公倍数
 * 7 % 4 = 3   4 % 3 = 1  3 % 1 = 0 7*4/1 = 28 最小公倍数就是28 最大公约数就是1
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let tokens = line.split(" ").sort((a, b) => a - b);
    let a = parseInt(tokens[0]);
    let b = parseInt(tokens[1]);
    let icm = 0;
    function gcdFun(x, y) {
      return y == 0 ? x : gcdFun(y, x % y);
    }
    if (b % a === 0) {
      icm = b;
    } else {
      let gcdNum = gcdFun(a, b);
      icm = (a * b) / gcdNum;
    }
    // 如果一个数字是质数。那么最小公倍数就是他们相乘
    // 2个数字都不是质数 则需要计算
    console.log(icm);
  }
})();
