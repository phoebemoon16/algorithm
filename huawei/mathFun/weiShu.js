/*
 * @Author: wanghh
 * @Date: 2024-04-03 16:46:25
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-03 17:06:42
 * @Description:
 */
/** 题目描述: 出租车计费 、靠谱的车
程序员小明打了一辆出租车去上班。出于职业敏感，，他注意到这辆出租车的计费表有点问题，总是偏大。
出租车司机解释说他不喜欢数字4，所以改装了计费表，任何数字位置遇到数字4就直接加1，其余功能都正常。
比如:
23再多一块钱就变为25:
39再多一块钱变为50:
399再多一块钱变为500:
小明识破了司机的伎俩，准备利用自己的学识打败司机的阴谋
给出计费表的表面读数，返回实际产生的费用。
输入描述:
只有一行，数字N，表示里程表的读数。
(1<=N<=888888888)。
输出描述:
一个数字，表示实际产生的费用。以回车结束

遇到4就直接+1 直到遇到的位数里面没有4

想不到===
实际答案： 想等于9进制计数器的工作原理 逢9进1
https://fcqian.blog.csdn.net/article/details/127418150

相同题型 总是跳过3和8 想等于8进制计数器的工作原理 逢9进1
https://fcqian.blog.csdn.net/article/details/127490548
*/

function solution(num) {
    let sum = 0
    for(let i = 0; i<num.length; i++) {
        if(num[i] > 4) {
            sum += (num[i] - 1) * Math.pow(9, Math.abs(num.length - 1- i))
        } else {
            sum += num[i] * Math.pow(9, Math.abs(num.length - 1 - i ))
        }
    }
    return sum
}


function solution2(num) {
    num = num.split('').reverse().join('')
    let sum = 0
    for(let i = 0; i<num.length; i++) {
        if(num[i] > 4) {
            sum += (num[i] - 1) * Math.pow(9, i)
        } else {
            sum += num[i] * Math.pow(9, i)
        }
    }
    return sum
}

console.log(solution('8'))
console.log(solution('38'))
console.log(solution('58'))
console.log(solution('558'))

console.log(solution2('8'))
console.log(solution2('38'))
console.log(solution2('58'))
console.log(solution2('558'))