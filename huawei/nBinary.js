/**
 *题目描述
主管期望你实现一个基于字符串的N进制的减法。
需要对输入的两个字符串按照给定的N进制进行减法操作，输出正负符号和表示结果的字符串。

输入描述
输入有三个参数：
第一个参数是整数形式的进制N值，N值范围为大于等于2、小于等于35。
第二个参数为被减数字符串；
第三个参数为减数字符串。
有效的字符包括0-9以及小写字母a-z，字符串有效字符个数最大为100个字符，另外还有结尾的\0。

限制：
输入的被减数和减数，除了单独的0以外，不能是以0开头的字符串。
如果输入有异常或计算过程中有异常，此时应当输出-1表示错误。
输出描述
输出有2个。

其一为减法计算的结果，-1表示出错，0表示结果为整数，1表示结果为负数。
其二为表示结果的字符串。

用例1
输入
2 11 1
输出
0 10
说明
按二进制计算 11 -1 ，计算正常，0表示符号为正数，结果为10

用例2
输入
8 07 1
输出
-1
说明
按8进制，检查到减数不符合非0前导的要求，返回结果为-1，没有其他结果内容。

解题思路：
n进制的减法 ： 想转化为10进制进行计算，最后再转化为N进制
注意极端情况
 */
function solution(n, str1, str2) {
  if (n < 2 || n > 25) return -1;
  if (!valid(str1, n) || !valid(str2, n)) return -1;
  str1 = parseInt(str1, n);
  str2 = parseInt(str2, n);
  console.log(str1, str2, "str999");
  const diff = Number(Math.abs(str1 - str2)).toString(n);
  return `${str1 >= str2 ? 0 : 1} ${diff}`;
}

function valid(str, n) {
  if (str.startsWith("0")) {
    return str === "0";
  }
  // 被减数，减数只能包含字符0-9，a-z
  const regExp = /[^a-z0-9]/; // 不包含a-z0-9 则就不满足条件
  if (regExp.test(str)) return false;

  // 被减数，减数长度最多100
  if (str.length > 100) return false;

  // 被减数，减数的每位不能超过n
  for (let c of str) {
    if (/^[0-9]$/.test(c)) {
      if (c - 0 >= n) return false; // 比如2进制数的每一位不能超过2
    } else {
      if (String(c).charCodeAt() - 87 >= n) return false; // ，16进制数每一位不能超过f
    }
  }

  return true;
}
console.log(solution(2, "11", "1"));
console.log(solution(8, "07", "1"));
