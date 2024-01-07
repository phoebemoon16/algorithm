/**
 * 给定一个含有N个正整数的数组, 求出有多少个连续区间（包括单个正整数）, 它们的和大于等于x。

输入描述
第一行两个整数N x（0 < N <= 100000, 0 <= x <= 10000000)

第二行有N个正整数（每个正整数小于等于100)。

输出描述
输出一个整数，表示所求的个数。

注意：此题对效率有要求，暴力解法通过率不高，请考虑高效的实现方式。

用例1
输入
3 7
3 4 7
输出
4
说明
第一行的3表示第二行数组输入3个数，第一行的7是比较数，用于判断连续数组是否大于该数；组合为 3 + 4; 3 + 4 + 7; 4 + 7; 7; 都大于等于指定的7；所以共四组。

用例2
输入
10 10000
1 2 3 4 5 6 7 8 9 10
输出
0
说明
所有元素的和小于10000，所以返回0。

也可以定义2个位置 l r 滑动窗口
 */

function solution(array, max) {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            // console.log(i,j,array[i] + array[j])
            if (array[i] + array[j] >= max) {
                result++
            }
        }
        if (i === array.length - 1 && array[i] >= max) {
            result++
        }
    }
    return result
}

// 每个人只能参加一次 且不能
function solution2(array, max) {
    let result = 0
    let template = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            console.log(i,j,array[i] + array[j])
            if (array[i] + array[j] >= max && (!template.includes(i) &&  !template.includes(j))) {
                template.push(i,j)
                result++
                break;
            }
        }
        if (i === array.length - 1 && array[i] >= max && !template.includes(i) ) {
            result++
        }
    }
    return result
}

console.log(solution([3, 4, 7], 7))
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1000))
console.log(solution2([3,1,5,7,9], 8))
console.log(solution2([3,1,5,7,9,2,6], 8))