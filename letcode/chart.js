/** 
 * https://leetcode.cn/problems/sfvd7V/description/
 * 字母异位词分组
 * 
 * 给定一个字符串数组 strs ，将 变位词 组合在一起。 可以按任意顺序返回结果列表。
注意：若两个字符串中每个字符出现的次数都相同，则称它们互为变位词。

示例 1:
输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]

解题思路： 先copy一个一个数组去进行排序 然后将相同的index
利用map 可以少2个for循环 所以利用好map
 */
function solution(array) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    let originStr = array[i]; // 最后返回的是原数组 而不是新数组
    let str = array[i].split("").sort().join("");
    if (map.has(str)) {
      let list = map.get(str);
      console.log(list, "list");
      map.set(str, [...list, originStr]);
    } else {
      map.set(str, [originStr]);
    }
  }
  console.log(array, map, "testArray");
  // 将map的value 转化为数组 [...map.values()] 或者 Array.from(map.values())
  return Array.from(map.values());
}
console.log(solution(["eat", "tea", "tan", "ate", "nat", "bat"]));
