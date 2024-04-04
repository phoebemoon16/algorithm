/** 元音
 * 
 * 题目描述:
开头和结尾都是元音字母(aeiouAEIOU) 的字符串为元音字符串，其中混杂的非元音字母数量为其瑕疵度。比如:
1.“a"“aa”是元音字符串，其瑕疵度都为0
2.“aiur”不是元音字符串 (结尾不是元音字符)
3.“abira”是元音字符串，其瑕疵度为2
给定一个字符串，请找出指定瑕疵度的最长元音字符子串，并输出其长度，如果找不到满足条件的元音字符子串，输出0。
子串: 字符串中任意个连续的宁符组成的子序列称为该字符串的子串。
输入描述:
首行输入是一个整数，表示预期的瑕症度flaw，取值范围[0,65535].
接下来一行是一个仅由字符a-和A-Z组成的字符串，宁符串长度(0,65535]。
输出描述:
输出为一个整数，代表满足条件的元音字符子串的长度

解题思路：
1.先找到字符串中所有的元音子串  有问题哦 2个元音子串也可以维护成一个元音子串 所以这道题的意思是求出最大的元音子串 并求出其有瑕疵的次数
2.然后再找出其中瑕疵最长的子串
 */


// 第一版 先求出最长的元音字母字母  再求其瑕疵
function solution(str){
   let set = new Set('aeiouAEIOU')
   let left = 0
   let right = 1
   // startLeft 最开始的key startRight 结束的key 找出最长的元音子串 并求出其他原子串中的位置
   let startLeft = null
   let startRight = 0
   while(right <= str.length) {
    if(set.has(str[left])) {
        startLeft = left
        right++
    } else {
      right = left + 1
      left ++
    }
    if(set.has(str[right])) {
        startRight = right
        right++
    }
   }
   let l = startLeft
   let r = startLeft + 1
   let res = []
   let ans = 0
   while(r <= startRight) {
     if(!set.has(str[r])) {
        res.push(str[r])
        ans = Math.max(ans, r-l)
        r++
     } else {
        l = r
        r++
     }
   }
   
   console.log(startLeft, startRight, res, ans, 'lefy00')
   return ans // 最长的子串的位置
}
console.log(solution('asdbuiodevauufgh'))
console.log(solution('fghaehhhottttttu'))