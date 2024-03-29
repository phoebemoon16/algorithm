/**
 * 攀登者喜欢寻找各种地图，并且尝试攀登到最高的山峰
地图表示为一维数组，数组的索引代表水平位置，数组的元素代表相对海拔高度。其中数组元素0代表地面。
一个山脉可能有多座山峰(高度大于相邻位置的高度，或在地图边界且高度大于相邻的高度).
登山者想要知道一张地图中有多少座山峰。用C++写 

输入描述：
输入为一个整型数组，数组长度大于1。

用例1
输入：
0，1，2，3，2，4
输出
2
说明:
元素3和4都是山峰，输出2

解题思路： 中间元素大于两边的元素  边界元素大于其旁边元素
太多for 繁重

第二种思路： 求出左边高度和右边高度 边界的的话 第一个元素 左边为0 第二个元素 右边为0

leftHight = i - 1 >= 0 ? array[i-1] : 0
rightHight = i + 1 < array.length ? array[i+1] : 0
if(array[i] >leftHight && array[i] > rightHight) {
    resultArray.push(array[i])
}
 */
function solution(array){
    let resultArray = []
    for(let i = 0; i< array.length; i++) {
        if(i === 0) {
            array[0] > array[1] ? resultArray.push(array[0]) : '' 
        } else if (i === array.length -1) {
            array[i] > array[i-1] ? resultArray.push(array[i]) : ''
        } else {
            if (array[i] > array[i-1] && array[i] > array[i+1]) {
                resultArray.push(array[i])
            }
        }
    }
    console.log(resultArray, 'resultAarray')
    return resultArray.length
}

console.log(solution([0,1,2,3,2,4]))
console.log(solution([0,1,2,4,3,1,2,3,2,1,0]))
console.log(solution([0,1,4,3,1,0,0,1,2,3,1,2,1,0]))

