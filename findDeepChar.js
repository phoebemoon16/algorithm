/**
 * 找出最深的(
 * 给出一段字符，你找出最深的括号
 */
function maxDeep(s) {
  let num = 0;
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      num++;
      ans = Math.max(num, ans);
    }
    if (s[i] === ")") {
      num--;
    }
  }
  return ans;
}

let ans = maxDeep("787((90))jjj(((90)))");
console.log(ans);
