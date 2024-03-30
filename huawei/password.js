/**
 * 给定用户密码输入流input，输入流中字符<表示退格，可以清除前一个输入的字符，请你编写程序，输出最终得到的密码字符，并判断
密码是否满足如下的密码安全要求。
密码安全要求如下:
1.密码长度>=8.
2.客码至少需要包含1个大写字母
3.密码至少需要包含1个小写字母,
4.密码至少需要包含1个数字
5.密码至少需要包含1个字母和数字以外的非空白特殊字符
注意空串退格后仍然为空串，且用户输入的字符串不包含<字符和空白字符
输入描述
用一行字符串表示输入的用户数据，输入的字符串中字符标识退格，用户输入的字符串不包含空白字符，例如: ABCC89%000<
输出描述
输出经过程序处理后，输出的实际密码字符串，并输出改密码字符串是否满足密码安全要求。两者间由，分隔,
例如:ABc89%00,true

解题思路： 1.正则的运用 ==
先替换 str.replace(/</g)
 */

function solution(str){
//  let reg = /.{1}</g  正则不对 如果<前没有字符 替换不了
let reg = /.?</g // . 匹配任意一个字符 ?表示匹配前面一次或0次 <字符
 str = str.replace(reg, '') //先解出密码 如果正则忘了可以用for of循环字符串 遇到< pop 其余字符push
 console.log(str)
//  校验密码是否符合条件 一个一个来 5个条件 用一个sum sum等于5 就满足条件
let sum  = 0
if(str.length >= 8) sum++
if (/[A-Z]/.test(str)) sum++;
if (/[a-z]/.test(str)) sum++;
if (/[0-9]/.test(str)) sum++;
if (/[^\da-zA-Z]/.test(str)) sum++; 
let flag = false
if(sum === 5) flag = true
return [str, flag, sum]
}

console.log(solution('ABC<c89%000<'))
console.log(solution('<9<c89%000<'))