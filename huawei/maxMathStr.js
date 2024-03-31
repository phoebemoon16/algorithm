/**
 * 题目描述:
从输入中提取合法的数学表达式并计算最长表达式的结果
如果没有返回0
简单数学表达式只能包含以下内容：
数字0-9，符号 + - *
说明:
1.所有数字，计算结果都不超过long
2.如果有多个长度一样的，请返回第一个表达式的结果!
3.数学表达式，必须是最长的，合法的
4.操作符不能连续出现，如 ±-+1 是不合法的

输入描述：
字符串

输出描述：
表达式的值

用例
输入：
1-2abcd
输出：
-1
说明;
提取的合法表达式为 "1-2",结果为-1

思路一 先获取到所有正确的表达式 再取出最长的 再计算出结果
 */



// 正则很重要 * 表示匹配前面的表达式零次或多次， $则是匹配字符串的结尾
function isValid(expression){
    return /^[0-9]+(?:[+\-*][0-9]+)*$/.test(expression)
}


function evaluateExpression(expression) {
    return eval(expression);
}

function solution(str){
    let maxLen = 0
    let maxExpresiion = ''
    // 2个for循环 找出长度最长最符合条件的表达式
    for(let i = 0; i<str.length; i++) {
        for(let j = i+1; j<str.length; j++) {
            let expression = str.substring(i,j)
            if(isValid(expression) && expression.length > maxLen) {
                maxExpresiion = expression
                maxLen = expression.length
            }

        }
    }
    console.log(maxExpresiion, 'expression')
    return evaluateExpression(maxExpresiion)
}

console.log(solution('1-2abcd'))
console.log(solution('1-2abc3+4*9-3d'))

/**
 * const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
 
void (async function () {
  const s = await readline();
 
  // 下面正则可得90%+通过率
  // const reg = /^(-?\d+)([+*-])(\d+)$/;
 
  // 下面正则应该可得100%通过率，如果不行再用前面正则
  const reg = /^([+-]?\d+)([+*-])(\d+)$/;
 
  let maxExpLen = 0;
  let ans = 0;
 
  for (let i = 0; i < s.length; i++) {
    // 本题有大数量级用例，因此需要此步优化，不然通过率不高
    if (s.length - i <= maxExpLen) {
      break;
    }
 
    for (let j = i; j < s.length; j++) {
      const sub = s.slice(i, j + 1);
 
      if (reg.test(sub) && sub.length > maxExpLen) {
        maxExpLen = sub.length;
 
        const res = reg.exec(sub);
 
        const op_num1 = parseInt(res[1]);
        const op = res[2];
        const op_num2 = parseInt(res[3]);
 
        switch (op) {
          case "*":
            ans = op_num1 * op_num2;
            break;
          case "+":
            ans = op_num1 + op_num2;
            break;
          case "-":
            ans = op_num1 - op_num2;
            break;
        }
      }
    }
  }
 
  console.log(ans);
})();
 */