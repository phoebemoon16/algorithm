
/**
 * 滑动窗口 K
 * @param {} array 
 * [1,3,-1,-3,5,3,6,7]
 */
function solution(array, k) {
    let result = []
    let currentArray = [] 
    for(let i =0; i< k; i++) {
        currentArray.push(array[i])
    }
    result.push(Math.max(...currentArray))
    let right = k
    while(right < array.length) {
        currentArray.shift()
        currentArray.push(array[right])
        result.push(Math.max(...currentArray))
        right++
    }
    return result
}

console.log(solution([1,3,-1,-3,5,3,6,7], 3))
console.log(solution([1,-1], 1))