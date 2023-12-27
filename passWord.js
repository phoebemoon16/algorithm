/*
 * @Author: wanghh
 * @Date: 2023-03-08 14:54:56
 * @LastEditors: wanghh
 * @LastEditTime: 2023-03-08 14:56:23
 * @Description:
 * 密码要求: 收获好好看正则呀 ！！！
1.长度超过8位
2.包括大小写字母.数字.其它符号,以上四种至少三种
3.不能有长度大于2的包含公共元素的子串重复 （注：其他符号不含空格或换行）
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let item = line;
    let flag = "OK";
    if (item.length < 8) {
      flag = "NG";
    }
    let sum = 0;
    if (/[A-Z]/.test(item)) sum++;
    if (/[a-z]/.test(item)) sum++;
    if (/[0-9]/.test(item)) sum++;
    if (/[^\da-zA-Z]/.test(item)) sum++; // 特殊字符
    if (sum < 3) {
      flag = "NG";
    }
    // 找到重复的字符串
    for (let j = 0; j < item.length - 3; j++) {
      let str = line.substr(j, 3);
      if (line.substr(j + 1).includes(str)) {
        flag = "NG";
      }
    }
    console.log(flag);
  }
})();
