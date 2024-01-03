/*
 * @Author: wanghh
 * @Date: 2024-01-03 11:19:20
 * @LastEditors: wanghh
 * @LastEditTime: 2024-01-03 14:31:31
 * @Description:
 */
/**
 * 题目描述
给定用户密码输入流 input，输入流中字符 '<' 表示退格，可以清除前一个输入的字符，请你编写程序，输出最终得到的密码字符，并判断密码是否满足如下的密码安全要求。

密码安全要求如下：
密码长度 ≥ 8；
密码至少需要包含 1 个大写字母；
密码至少需要包含 1 个小写字母；
密码至少需要包含 1 个数字；
密码至少需要包含 1 个字母和数字以外的非空白特殊字符；
注意空串退格后仍然为空串，且用户输入的字符串不包含 '<' 字符和空白字符

输入描述
用一行字符串表示输入的用户数据，输入的字符串中 '<' 字符标识退格，用户输入的字符串不包含空白字符，例如：

ABC<c89%000<
输出描述
输出经过程序处理后，输出的实际密码字符串，并输出改密码字符串是否满足密码安全要求。两者间由 ',' 分隔， 例如：
ABc89%00,true

解题思路：
需要用到正则表达式 == 这个要记住 背也要记住

笨方法：
密码长度大于8 password.length >= 8 {8,}  {8,10} 大于8小于10
lower >= 1   c >= "a" && c <= "z" lower++ (?=.*?[a-z])
upper >= 1   c >= "A" && c <= "Z" upper++ (?=.*?[A-Z])
number       c >= "0" && c <= "9" number++ (?=.*?[0-9])  / (?=.*\d)
else         non_letter_number++; (?=.*?[#?!@$%^&*—])
^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
?= 只要后面的校验匹配任一部分
. 匹配除了换行以外的任何角色
* 匹配0个或更多的令牌
\d 匹配任何字符
 */
function solution(str) {
  let upper = 0;
  let lower = 0;
  let number = 0;
  let non_letter_number = 0;
  const password = [];
  const stack = [];
  for (let c of str) {
    if (c == "<") {
      if (stack.length == 0) continue;
      stack.pop(); // 输入流中字符 '<' 表示退格，可以清除前一个输入的字符
    } else {
      stack.push(c);
    }
  }

  let strTemp = stack.join("");
  let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  if (reg.test(strTemp)) {
    console.log(true, "符合条件");
  } else {
    console.log(false, "不符合条件");
  }
  for (let c of stack) {
    password.push(c);
    if (c >= "a" && c <= "z") {
      lower++;
    } else if (c >= "A" && c <= "Z") {
      upper++;
    } else if (c >= "0" && c <= "9") {
      number++;
    } else {
      non_letter_number++;
    }
  }

  if (
    password.length >= 8 &&
    lower >= 1 &&
    upper >= 1 &&
    number >= 1 &&
    non_letter_number >= 1
  ) {
    password.push(",true");
  } else {
    password.push(",false");
  }

  return password.join("");
}

console.log(solution("ABC<c89%000<"));
console.log(solution("ABC89000<"));
