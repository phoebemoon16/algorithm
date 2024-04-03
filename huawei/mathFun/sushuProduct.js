/** 求一个数的素数之积
 * 题目描述:
RSA加密算法在网络安全世界中无处不在，它利用了极大整数因数分解的困难度，数据越大，安全系数越高，
给定一个32位正整数，请对其进行因数分解，找出是哪两个素数的乘积。

输入描述:
一个正整数num，0 < num <= 2147483647

输出描述：
如果成功找到，以单个空格分割，从小到大输出两个素数，分解失败，请输出-1，-1

素数：只能被1 和 自己整除的数字 所以2也是素数

 */

function isSushu(x) {
  let flag = true;
  //   处理1 2的情况
  if (x == 1) return true;
  // 素数只能被1 和 自己整除
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      flag = false;
      return;
    }
  }
  return flag;
}

// 求一个数的2个因数
function solution(num) {
  // 如果num为素数 则不可能是2个素数乘积
  if (isSushu(num)) return "-1 -1";
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      let j = num / i;
      if (isSushu(i) && isSushu(j)) {
        return i < j ? `${i} ${j}` : `${j} ${i}`;
      } else {
        break;
      }
    }
  }
  return "-1 -1";
}
// console.log(isSushu(2));
// console.log(isSushu(5));
console.log(solution(8));
