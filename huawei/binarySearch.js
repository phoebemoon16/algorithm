/**
 * 二分查找
 * 小明找位置 但是一个问题： 不是找这个值的位置 而是把这个值放到哪里合适
 * 
 * 93,95,97,100,102,123,155
   110
   输出： 6
 */

function solution(str, target) {
  let arr = str.split(",").sort((a, b) => {
    return a - b;
  });
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midVal = arr[mid];
    if (midVal > target) {
      high = mid - 1;
    } else if (midVal < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return low + 1;
}

console.log(solution("93,95,97,100,102,123,155", 110));
