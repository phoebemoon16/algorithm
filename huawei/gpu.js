/*
 * @Author: wanghh
 * @Date: 2024-01-08 17:09:21
 * @LastEditors: wanghh
 * @LastEditTime: 2024-01-09 08:36:07
 * @Description:
 */
/**
 * 
 * 题目描述
为了充分发挥GPU算力，需要尽可能多的将任务交给GPU执行，现在有一个任务数组，数组元素表示在这1秒内新增的任务个数且每秒都有新增任务。

假设GPU最多一次执行n个任务，一次执行耗时1秒，在保证GPU不空闲情况下，最少需要多长时间执行完成。

输入描述
第一个参数为GPU一次最多执行的任务个数，取值范围[1, 10000]
第二个参数为任务数组长度，取值范围[1, 10000]
第三个参数为任务数组，数字范围[1, 10000]

输出描述
执行完所有任务最少需要多少秒。

用例1
输入
3
5
1 2 3 4 5
输出
6
说明
一次最多执行3个任务，最少耗时6s

用例2
输入
4
5
5 4 1 1 1
输出
5
说明
一次最多执行4个任务，最少耗时5s

解题思路设置一个余数，当够任务执行有剩余的时候 就预留到下一个
 */

function solution(num, arr) {
  let result = 0;
  let restNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + restNum < num) {
      restNum = 0;
      result++;
    } else {
      let intNum = parseInt((arr[i] + restNum) / num);
      restNum = (arr[i] + restNum) % num;
      result = result + intNum;
    }
    // 注意最后一个元素 不能只取整数 不取余数 余数肯定是小于num的
    if (i === arr.length - 1 && restNum >= 1) {
      result = result + 1;
    }
  }
  return result;
}

console.log(solution(4, [5, 4, 1, 1, 1]));
console.log(solution(3, [1, 2, 3, 4, 5]));
console.log(solution(3, [1, 1, 1, 1, 1]));
console.log(solution(3, [4, 3, 3, 5, 7]));
