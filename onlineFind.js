/**
 * 查找有序数组中数字最后一次出现的位置
 */

// 这种做法是 时间复杂度最少的 O(logN)
const findLast = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (right > left + 1) {
      const mid = Math.floor((left + right) / 2);
      // 说明在左边，需要缩小右边的范围 千万不能有等于
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid;
      }
    }
    if (nums[right] === target) {
      return right;
    }
    if (nums[left] === target) {
      return left;
    }
    return -1;
  };
  
  console.log(findLast([5, 7, 7, 8, 8, 8, 10], 8));
  
  /**
   * 查找多个字符串中最长公共前缀
   */
  const findCommonPrefix = (arr) => {
    let str = "";
    //   先根据长度大小排序
    const n = arr.map((item) => item.length).sort()[0];
    for (let i = 0; i < n; i++) {
      str += arr[0][i];
      if (arr.some((item) => !item.startsWith(str))) {
        console.log(
          str,
          str.length,
          str.slice(0, str.length - 1),
          "str.slice(0, str.length - 1)"
        );
        //   str += arr[0][i];
        return str.slice(0, str.length - 1);
      }
    }
    return str;
  };
  
  // 是使用evey去做测试 startsWith
  const findCommonPrefixMy = (arr) => {
    let str = "";
    //   先根据长度大小排序
    const n = arr.map((item) => item.length).sort()[0];
    for (let i = 0; i < n; i++) {
      if (arr.every((item) => item.startsWith(str))) {
        str += arr[0][i];
      } else {
        return str.slice(0, str.length - 1);
      }
    }
    return str.slice(0, str.length - 1);
  };
  
  strs = ["abcdef", "abdefw", "abc"];
  let result = findCommonPrefix(strs);
  let result2 = findCommonPrefixMy(strs);
  console.log(result, result2, "8989");
  