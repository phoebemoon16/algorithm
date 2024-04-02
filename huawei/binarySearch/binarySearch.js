/*
 * @Author: wanghh
 * @Date: 2024-01-10 08:06:19
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-02 09:34:07
 * @Description:
 */
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
    // 等low 和 high相当的时候 就退出循环
    const mid = Math.floor((low + high) / 2);
    const midVal = arr[mid];
    console.log(low, high, midVal, "midval");
    if (midVal > target) {
      high = mid - 1;
    } else if (midVal < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  // 一般二分是查当前值的位置（return -1 表示没有找到）
  // 目前是这个值放到哪里合适 所以应该是没有相同的值的 就取出最接近他且比他小的放在他前面
  return low + 1; // 小朋友排队从1开始 而不是跟随数组下标从0开始
}

console.log(solution("93,95,97,100,102,123,155", 110));

/**
 * 普通二分法
 * Math.floor向下取整 Math.ceil() 向上取整
 *  */
function binarySearch(target, array) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    console.log(middle, array[middle]);
    if (array[middle] > target) {
      high = middle - 1;
    } else if (array[middle] < target) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(8, [1, 3, 8, 10]));

/** 取银饰
 * 二分法和数学逻辑题一起运用
 * 题目描述:
有N块二手市场收集的银饰，每块银饰的重量都是正整数，收集到的银饰会被熔化用于打造新的饰品。
每一回合，从中选出三块最重的银饰，然后一起熔掉，假设银饰的重量分别为x, y和z，且x <= y <= z。那熔掉的可能结果如下:
1.如果 x == y == z，那么三块银饰都会被完全熔掉
2.如果 x == y 且 y != z ，会剩余重量为 z - y的银块无法被熔掉:
3.如果 x != y 且y == z，会剩余重量为 y - x的银块无法被熔掉
4.如果 x != y且y != z，会剩余重量为z - y 与y - x差值的银块无法被熔掉。
如果剩余两块，返回较大的重量(若两块重量相同，返回任意一块皆可);
如果只剩下一块，返回该块的重量，如果没有剩下，就返回0

输入描述:   
输入数据为两行
第一行为银饰数组长度 n，1 <= n <= 40
第二行为 n 块银饰的重量，重量的取值范围为[1，2000]，重量之间使用空格隔开

输出描述:   
如果剩余两块，返回较大的重量(若两块重量相同，返回任意一块皆可)，如果只剩下一块，返回该块的重量，如果没有剩下，就返回0

解题思路： 
1. 先取3块进行融化
2. 如果3块融化的有剩余 则和其他的银块中 找到合适的位置 插入进去 然后继续选3快重的进行融化
3. 根据没有完全融化的规则去列算法
 */

function binarySearch2(target, array) {
  let low = 0;
  let high = array.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] > target) {
      high = mid - 1;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return low;
}
function sliverFun(array) {
  array.sort((a, b) => a - b);
  while (array.length >= 3) {
    let threeArray = [array.pop(), array.pop(), array.pop()];
    // z - y 与y - x差值 数学表达式记得看题
    let reminder = Math.abs(
      threeArray[0] - threeArray[1] - threeArray[1] + threeArray[2]
    );
    // 如果有剩余则push到array中相对于的位置上 和小明找位置是同样的算法
    if (reminder !== 0) {
      let index = binarySearch2(reminder, array);
      // console.log(index, "index00");
      array.splice(index, 0, reminder);
    }
  }
  if (array.length === 2) {
    return Math.max(array[0], array[1]);
  }
  if (array.length === 1) {
    return array[0];
  }
  if (array.length === 0) {
    return 0;
  }
}
console.log(sliverFun([1, 3, 4, 2, 6]), "sliver");
console.log(sliverFun([3, 7, 10]), "sliver");
console.log(sliverFun([1, 1, 1]), "sliver");
