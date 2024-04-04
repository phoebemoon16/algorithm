/** sonSUn
 * 
 * 题目描述: 字符串序列判定/最后一个有效字符 (本题分值100)输入两个字符串S和L，都只包含英文小写字母。
S长度<=100，L长度 <= 500,000。判定S是否是L的有效子串。

判定规则:
S中的每个字符在L中都能找到 (可以不连续)且S在L中字符的前后顺序与S中顺序要保持一致。
(例如，S=”ace"是L="abcde"的一个子序列且有效字符是a、c、e，而"aec"不是有效子序列，且有效字符只有a、e)
输入描述:
输入两个字符串S和L，都只包含英文小写字母。S长度<=100，L长度<=500.000.先输入S，再输入L，每个字符串占一行。
输出描述:
输出S串最后一个有效字符在L中的位置。(首位从0开始计算，无有效字符返回-1)

ace
abbcde

输出5 e的位置就是5
 */

function solution(str1, str2){
    let sonindex = 0
    let parentIndex = 0
    while(parentIndex <= str2.length -1) {
        if(str1[sonindex] === str2[parentIndex]) {
            if(sonindex === str1.length -1) {
                return parentIndex
            }
            sonindex++
            parentIndex++
        } else {
            parentIndex++
        }
    }
   return -1
}

console.log(solution('ace', 'abbcde'))
console.log(solution('fhe', 'abbcde'))
console.log(solution('aec', 'abcde'))