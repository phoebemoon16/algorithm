/**
 * 题目描述:
机器人搬砖，一共有N堆砖存放在N个不同的仓库中，第i堆砖中有bricks[i]块砖头，要求在8小时内搬完。
机器人每小时能搬砖的数量取决于有多少能量格，机器人一个小时中只能在一个仓库中搬砖，
机器人的能量格每小时补充一次且能量格只在这一个小时有效，为使得机器人损耗最小化尽量减小每次补充的能量格数 
为了保障在8小时内能完成搬砖任务，请计算每小时给机器人充能的最小能量格数。
1.无需考虑机器人补充能量格的耗时，
2.无需考虑机器人搬砖的耗时，
3.机器人每小时补充能量格只在这一个小时中有效
输入描述:
第一行为一行数字，空格分隔
输出描述:
机器人每小时最少需要充的能量格，若无法完成任务，输出-1
 */

// 判断能不能搬完
function check(enery, array){
    let num = 0
    for(let item of array) {
        num += Math.ceil(item / enery)
    }
    if (num <= 8) return true
    else return false

}

function solution(array) {
    // 超过8个仓库无法搬完
    if(array.length > 8) {
        return -1
    }
    let max =  Math.max(...array)
    // 如果是8个仓库就取最大值
    if(array.length === 8) {
        return max
    }
    // 如果小于8个仓库的话 能力格可以不是最大的 需要查找符合条件的能力值 一个仓库的 能力格最大为max 最小为1(并不能只考虑当前值 要考虑极限 比如只有一个仓库 且只有一块砖头 所以最小为1)
    // 查找！！！ 能想到的查找算法 就是二分算法！最快的查找方法 二分查找的另类方法！！
    let min = 1
    let ans = max
    while(min < max) {
        let middle = Math.floor((min + max)/ 2)
        if (check(middle, array)) { // 找到符合条件的 也要接着找 知道不符合条件 则上一个值就是我们要查找的值
            ans = middle
            max = middle - 1
        } else {
            min = middle + 1 
        }
    }
    return ans
}

console.log(solution([30,12,25,8,19]))