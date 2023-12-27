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
