/**
 * 题目描述
给定一个字符串，只包含字母和数字，按要求找出字符串中的最长（连续）子串的长度，字符串本身是其最长的子串，子串要求：

1、 只包含1个字母(a~z, A~Z)，其余必须是数字；

2、 字母可以在子串中的任意位置；

如果找不到满足要求的子串，如全是字母或全是数字，则返回-1。

输入描述
字符串(只包含字母和数字)

输出描述
子串的长度

用例1
输入
abC124ACb
输出
4
说明
满足条件的最长子串是C124或者124A，长度都是4

用例2
输入
a5
输出
2
说明
字符串自身就是满足条件的子串，长度为2

用例3
输入
aBB9
输出
2
说明
满足条件的子串为B9，长度为2

用例4
输入
abcdef
输出
-1
说明
没有满足要求的子串，返回-1

可以用滑动窗口做
left right 如果遇到字符，left right 都加1 遇到数字 left不变 right+1 
如果滑动窗口里面有2个字母 left需要滑动在第一个字母后的一个位置

滑动窗口 字符串位置
 */

function solution(str){
    let left = 0,right = 0
    let maxLegth = -1
    let hasLetter = false
    const letterIdx = []
    while(right < str.length) {
        if(isLetter(str[right])) {
            hasLetter = true
            letterIdx.push(right)
            if(letterIdx.length > 1) {
                left = letterIdx.shift() + 1 // 第一个字母的位置后+1
            }
            console.log(right,left)
            // left === right 说明当前和前一个字符就是字母 就跳出此循环
            if(left === right) {
                right++;
                continue // 跳出这个循环 接着走
            }
        }
        maxLegth = Math.max(maxLegth, right-left+1)
        right ++
    }
    return maxLegth
}

function isLetter(c){
    return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') 
}
console.log(solution('abC124ACb'))
console.log(solution('aBB9'))
console.log(solution('abcdef'))