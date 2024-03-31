/**
 * 题目描述
寿司店周年庆，正在举办优惠活动回馈新老客户
寿司转盘上总共有 n 盘寿司，prices 是第i盘寿司的价格
如果客户选择了第i盘寿司，寿司店免费赠送客户距离第i盘寿司最近的下一盘寿司j，
前提是 prices[j] < prices[i]，如果没有满足条件的，则不赠送寿司。
每个价格的寿司都可无限供应
输入描述:
输入的每一个数字代表每盘寿司的价格，每盘寿司的价格之间使用空格分隔，例如:
3 15 6 14
表示:
第0盘寿司价格 prices[0]为3
第1盘寿司价格 prices[1]为15
第2盘寿司价格 prices[2]为6
第3盘寿司价格 prices[3]为14
寿司的盘数n范围为: 1 <= s <= 500
每盘寿司的价格 price 范围为: 1 <= price <= 1000
输出描述:
输出享受优惠后的一组数据，每个值表示客户选择第i盘寿司时实际得到的寿司的总价格。使用空格进行分隔，例如:
3 21 9 17
 */

function solution(array){
    let wealth = []
    let n = array.length
    for(let i = 0; i< array.length; i++) {
        wealth[i] = array[i]
        let j = i +1 
        while(j < n *2) {
            if (array[i] > array[j % n]) {
                wealth[i] = array[i]+array[j % n]
                break
            } else {
                j++
            }
        }
    }
    return wealth
}

console.log(solution([3,15,6,14]))