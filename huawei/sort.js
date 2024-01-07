

/**
 * 
 * {给定一个非空数组（列表），其元素数据类型为整型，请按照数组元素十进制最低位从小到大进行排序， 
 * 就是按照最后一位去进行排列
 * 十进制最低位相同的元素，相对位置保持不变。
当数组元素为负值时，十进制最低位等同于去除符号位后对应十进制值最低位。}
 */
function solution(str){
    let result = str.split(',').sort((a,b) => {
        return a.at(-1) - b.at(-1)
    })
    return result
}

console.log(solution('1,2,5,-21,22,11,55,-101,42,8,7,32'))