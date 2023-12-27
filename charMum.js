/**
 * 编写一个函数，计算字符串中含有的不同字符的个数。字符在 ASCII 码范围内( 0~127 ，包括 0 和 127 )，换行表示结束符，不算在字符里。不在范围内的不作统计。多个相同的字符只计算一次
例如，对于字符串 abaca 而言，有 a、b、c 三种不同的字符，因此输出 3 。
技术：
1.获取字符的ascII码值：'a'.charCodeAt(0)
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  // Write your code here
  while ((line = await readline())) {
    let tokens = line.split("");
    let num = 0;
    let arr = [];
    for (let i = 0; i < tokens.length; i++) {
      if (
        arr.findIndex((ele) => ele == tokens[i]) < 0 &&
        tokens[i].charCodeAt(0) > 0 &&
        tokens[i].charCodeAt(0) < 127
      ) {
        arr.push(tokens[i]);
        num++;
      }
    }
    console.log(num);
  }
})();
