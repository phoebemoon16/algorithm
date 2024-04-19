/*
 * @Author: wanghh
 * @Date: 2024-04-03 09:31:59
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-11 15:49:23
 * @Description:
 */
/** 来自异国的客人 进制之间的转换
 * 题目描述:
有位客人来自异国，在该国使用m进制计数。
该客人有个幸运数字n(n<m)，每次购物时，其总是喜欢计算本次支付的花费(折算为异国的价格后)中存在多少幸运数字。
问:当其购买一个在我国价值k的产品时，其中包含多少幸运数字?

输入描述:
第一行输入为 k, n, m。
其中:
k表示 该客人购买的物品价值(以十进制计算的价格)
n表示 该客人的幸运数字
m表示 该客人所在国度的采用的进制

输出描述:
输出幸运数字的个数，行末无空格。当输入非法内容时，输出0

解题思路： 考虑到进制之间的转换
有哪些进制： 16进制 10进制 4进制 2进制
 */
function solution(k, n, m) {
  // 幸运数字是 不能大于 进制数的 否则是没有的
  if (n >= m) return 0;
  let count = 0;
  let result = [];
  let stringRes = "";
  while (k > 0) {
    let remin = k % m; // 是每一位上的位值 从最低位开始去取 K进制转为m进制
    result.push(remin);
    stringRes = remin + stringRes;
    if (remin === n) {
      count++;
    }
    k = (k - remin) / m;
  }
  // 可以先放入数组 再翻转join  或者直接存在字符串里面 所以这道题求转化为后的值也是可以的
  console.log(result, result.reverse().join(""), stringRes, "resul0"); // result就是从个位到百位相应的值
  return count;
}

// 2个 10进制的10 转化为4进制为 22 幸运数为2  所以有2个
console.log(solution(10, 2, 4));
console.log(solution(10, 1, 2));
console.log(solution(40, 2, 4));
console.log(solution(44, 2, 4));
