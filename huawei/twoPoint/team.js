/** t团队 *
 * 题目描述：
用数组代表每个人的能力，一个比赛活动要求参赛团队的最低能力值为N，
每个团队可以由一人或者两人组成 
且一个人只能参加一个团队
计算出最多可以派出多少只符合要求的队伍。

输入描述：
第一行代表总人数，范围1-500000
第二行数组代表每个人的能力
1.数组大小，范围1-500000
2.元素取值，范围1-500000
第三行数值为团队要求的最低能力值，范围1-500000

输出描述：
最多可以派出的团队数量

输入： 
5
3 1 5 7 9
8

3 5 | 1 7 | 9 一对

解题思路： 
再升序排序
right先设为最大， 然后找出个人能力值超出的，right-- 因为是升序 right最后值为小于能力值的最大的值
将符合能力值的先筛选出来
*/

function solution(n, array, target) {
  let left = 0;
  let right = n - 1;
  let result = [];
  array = array.sort((a, b) => a - b);
  while (right >= left && array[right] >= target) {
    result.push(array[right]);
    right--;
  }
  // result = array.map(item => item >= target)
  while (right >= left) {
    if (array[left] + array[right] < target) {
      left++;
    } else {
      result.push([array[left], array[right]]);
      left++;
      right--;
    }
  }
  console.log(result);
  return result.length;
}
// console.log(solution(5, [3, 1, 5, 7, 9], 8));
// console.log(solution(3, [1, 1, 9], 8));
// console.log(solution(7, [3, 1, 5, 7, 9, 2, 6], 8));

function solution2(n, array, target) {
  let left = 0;
  let right = n - 1;
  let result = [];
  array = array.sort((a, b) => a - b);
  // result = array.map(item => item >= target)
  while (right >= left) {
    if (array[right] >= target) {
      result.push(array[right]);
      right--;
    } else if (array[left] + array[right] < target) {
      left++;
    } else {
      result.push([array[left], array[right]]);
      left++;
      right--;
    }
  }
  console.log(result);
  return result.length;
}

console.log(solution2(5, [3, 1, 5, 7, 9], 8));
console.log(solution2(3, [1, 1, 9], 8));
console.log(solution2(7, [3, 1, 5, 7, 9, 2, 6], 8));
