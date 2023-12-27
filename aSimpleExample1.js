/*
 * @Author: wanghh
 * @Date: 2023-12-19 16:26:10
 * @LastEditors: wanghh
 * @LastEditTime: 2023-12-27 09:04:28
 * @Description:
 */
// 冒泡排序
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

// 选择排序
function selectSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] < array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
}

// 插入排序 想想扑克牌 未排序的元素去排好的数据中找到自己的位置. 从小到大拍 插入到比自己小的元素前面
function insertSort(array) {
  let preIndex, current;
  for (let i = 1; i < array.length; i++) {
    preIndex = i - 1;
    current = array[i];
    while (preIndex >= 0 && array[preIndex] > current) {
      array[preIndex + 1] = array[preIndex]; // 之前的位置+1 给当前array[i]预留位置
      preIndex--;
    }
    /**555
     *  array[i]为什么会有影响呢？ 因为 array[preIndex + 1] = array[preIndex]
     *  array[preIndex + 1]  === array[index] 被替换了 所以用array[i]在while中会有问题
     *  需要再while外定义一下
     *  */
    console.log(current, array[i], i, "array[i]");
    array[preIndex + 1] = current;
  }
  return array;
}
console.log(insertSort([2, 6, 4, 1, 7, 9, 3]), "insertSort");

// 不排序找出里面2个最大值
function findTwoLargeNumbers(array) {
  let max1 = Math.max(array[0], array[1]);
  let max2 = Math.min(array[0], array[1]);
  let result = [max1, max2];
  for (let i = 2; i < array.length; i++) {
    if (array[i] > result[0]) {
      result = [array[i], result[0]];
    } else if (array[i] > result[1]) {
      result[1] = array[i];
    }
  }
  return result;
}

console.log(findTwoLargeNumbers([1, 3, 6, 20, 9, 15]));
console.log(bubbleSort([1, 3, 6, 20, 9, 15]));
console.log(selectSort([1, 3, 6, 20, 9, 15]));

// 找出一个字符串中出现字符次数最多的字符
function findTimesChar(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  let mostFrequentChar;
  let maxCount = 0;
  console.log(map, [...map.values()], "map00");
  map.forEach((item, char) => {
    if (item > maxCount) {
      maxCount = item;
      mostFrequentChar = char;
    }
  });
  // Math.max(...[...map.values()]);
  return mostFrequentChar;
}

console.log(findTimesChar("oouytrssgfts"));
