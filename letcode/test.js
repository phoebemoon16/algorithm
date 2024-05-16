/**
 * 
 * 1. 每个人至少分一颗
 * 2. 相邻的分数比较高的士兵，会多于分数比较低的
 * 
 * 【1,0，2】  2 1 2 
 * 【1,2,2 】 1 2 1
 *  [1,3,2]  1 2 1
 * [3,2,3]  2 1 2
 */

function solution(array) {
    if(array.length === 0) {
        return 0
    }
    if(array.length === 1) {
        return 1
    }
    let result = new Array(array.length).fill(1)
    for(let i =0; i<array.length;i++) {
        // 比较i i+1的分数
        if(array[i] > array[i+1]) {
            result[i] = result[i+1]+1
        }
        if(array[i+1] > array[i]) {
            result[i+1] = result[i]+1
        }
    }
    for(let i=array.length -1; i>=0;i--) {
        // 比较i i+1的分数
        if(array[i] > array[i+1]) {
            result[i] = result[i+1]+1
        }
        if(array[i+1] > array[i]) {
            result[i+1] = result[i]+1
        }
    }
    return result
    
}

console.log(solution([1,0,2]))
console.log(solution([1,2,2]))
console.log(solution([1,3,2]))
console.log(solution([3,2,3]))
console.log(solution([9,6,5,2,1]))  
console.log(solution([1, 2, 3, 5, 5, 5, 9, 9, 9, 6, 5, 2, 1]))