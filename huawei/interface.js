/**
 * 题目描述:
服务之间交换的接口成功率作为服务调用关键质量特性，某个时间段内的接口失败率使用一个数组表示,
数组中每个元素都是单位时间内失败率数值，数组中的数值为0~100的整数，
给定一个数值(minAverageLost)表示某个时间段内平均失败率容忍值，
即平均失败率小于等于minAverageLost
找出数组中最长时间段，如果未找到则直接返回NULL。

输入描述:
输入有两行内容，第一行为{minAverageLost}，第二行为{数组}，数组元素通过空格(" ")分隔
minAverageLost及数组中元素取值范围为0~100的整数，数组元素的个数不会超过100个。

输出描述:
找出平均值小于等于minAverageLost的最长时间段，输出数组下标对，格式{beginlndexl-{endlndex}(下标从0开始)
如果同时存在多个最长时间段，则输出多个下标对且下标对之间使用空格(" ")拼接，
多个下标对按下标从小到大排序
 */

function solution(array, num){
    let maxLen = 0
    let result = []
    if(array.length === 0 || array.length > 100 || num > 100) {
        return null
    }
    for(let i = 0; i< array.length; i++) {
        let sum = array[i]
        for(let j = i +1; j <= array.length; j++) {
            let len = j - i
            sum += array[j]
            // 刚开始想的是 array[i] + array[j] 不对 因为不只是2个相邻 还有可能是多个连续的符合条件 所以要求sum和
            if(sum / (len + 1) <= num) {
                if (len > maxLen) {
                    result = [[i,j]]
                    maxLen = len
                } else if (len === maxLen) {
                    result.push([i,j])
                }
            } else {
                break
            }
        }
    }
    return result.map(item => item.join('-')).join(' ')

}
console.log(solution([0,0,100,2,2,9,0,2], 2))
console.log(solution([0,1,2,3,4], 1))
console.log(solution([0,1,2,3,4,1,1,1,1], 1))