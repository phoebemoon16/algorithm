/*
 * @Author: wanghh
 * @Date: 2024-01-08 17:09:21
 * @LastEditors: wanghh
 * @LastEditTime: 2024-01-08 17:26:00
 * @Description:
 */
/**
 * 和arraySum还是有点区别的：
 *
 * 最多多少个队伍
 * 解题思路： 先把大于能力值的过滤出来，单人组队
 * 剩余的人进行一个排序升序，再定义 lr 指针，初始l = 0 r = k-1 k是剩余的长度
 * l r进行组队：
 * 如果大于l++ r--
 * 如果小于 l++
 *
 * 能用while就用while  不要想着for循环
 */
function solution(arr, num) {
  // let restArr =[]
  let restNum = 0;
  // for(let i = 0; i<arr.length; i++) {
  //     if(arr[i] > num) {
  //         restNum++
  //     } else {
  //         restArr.push(arr[i])
  //     }
  // }
  arr = arr.sort((a, b) => {
    return a - b;
  });
  let l = 0;
  let r = arr.length - 1;

  // 因为排序了 所以最大的再最后面 把大于能力值的个人找完之后 就可以算配对的了
  while (r >= l && arr[r] >= num) {
    r--;
    restNum++;
  }
  while (l < r) {
    if (arr[l] + arr[r] >= num) {
      restNum++;
      r--;
      l++;
    } else {
      l++;
    }
  }
  return restNum;
}

console.log(solution([3, 1, 5, 7, 9], 8));
console.log(solution([3, 1, 5, 7, 9, 2, 6], 8));
