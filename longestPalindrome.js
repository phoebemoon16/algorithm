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

function dpTwoFun(s) {
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

// 动态一维 好像做法更为方便
function dpFun(s) {
  if (s.length === 0) {
    return "";
  }
  const n = s.length;
  let start = 0;
  let maxLength = 1;

  // 优化为一维数组，dp[i] 表示以 s[i] 结尾的最长回文子串的长度
  const dp = Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let prev = 0;
    for (let j = n - 1; j >= i; j--) {
      const temp = dp[j]; //临时存储 dp[j] 的值
      if (i === j) {
        dp[j] = 1; // 单字符为回文
      } else if (s[i] === s[j]) {
        dp[j] = prev + 2; // 更新为 dp[i+1][j-1] + 2
      } else {
        dp[j] = 0;
      }
      prev = temp; // 更新 prev 为上一次的 dp[i+1][j-1]

      // 更新最长回文子串的起始位置和长度
      if (dp[j] > maxLength) {
        maxLength = dp[j];
        start = i;
      }
    }
  }
  return s.substring(start, start + maxLength);
}
console.log(dpTwoFun(s));
console.log(dpFun(s));

// 最能理解的方案
function solution(s) {
  let n = s.length;

  if (n === 0) {
    return "";
  }

  let dp = new Array(n).fill(false).map(() => new Array(n).fill(false));

  let start = 0;
  let maxLength = 1;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j <= i; ++j) {
      if (i - j < 2) {
        dp[j][i] = s[i] === s[j];
      } else {
        // 要求此2个字符相等且之前的字符也需要是回文字符
        dp[j][i] = s[i] === s[j] && dp[j + 1][i - 1]; // 之前的字符全部是回文
      }

      console.log(i - j + 1, maxLength, start, "i - j + 1");
      // 设置取更长的回文字符串，遇到更长的就修改start,maxLength
      if (dp[j][i] && maxLength < i - j + 1) {
        maxLength = i - j + 1;
        start = j;
      }
    }
  }

  console.log(start, maxLength, "max");
  return s.substring(start, start + maxLength);
}

console.log(solution(s), "solution");
