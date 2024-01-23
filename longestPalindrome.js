/**
 * 求最长回文字符串
 * abab 解：aba bab
 * cbbd 解：bb
 *
 * 1.中心扩散法 设置一个滑动窗口去获取最长的回文字符串
 * 2.动态规划
 *
 */

// 中心扩散 + 滑动窗口 目前还不是很理解
function longestPalindrome(s) {
  if (s.length === 0) {
    return "";
  }

  let start = 0;
  let maxLength = 1;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i);
    const len2 = expandAroundCenter(i, i + 1);
    const len = Math.max(len1, len2);
    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
}
let s = "abba";
console.log(longestPalindrome(s));

/**
 * 动态规划的解法 dp[i][j] 表示s[i]到s[j] 是不是回文字符串
 *  */

function dpFun(s) {
  if (s.length === 0) {
    return "";
  }

  let dp = new Array(s.length)
    .fill(false)
    .map(() => new Array(s.length).fill(false));

  let start = 0;
  let maxLength = 1;

  // 每个单个字符也是一个回文字符串
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }

  // 长度为2的字符
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  for (let len = 3; len <= s.length; len++) {
    for (let i = 0; i <= s.length - len; i++) {
      const j = i + len - 1;
      // 如果s[i] === s[j] 且dp[i+1][j-1]是回文子串 则设置start为i
      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;
        start = i;
        maxLength = len;
      }
    }
  }

  return s.substring(start, start + maxLength);
}

console.log(dpFun(s));
