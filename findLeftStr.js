/*
 * @Author: wanghh
 * @Date: 2023-03-13 10:06:44
 * @LastEditors: wanghh
 * @LastEditTime: 2023-03-13 10:12:22
 * @Description:
 * 1.我的思路是先排序（按字符串的长度）
 * 2.从最长的开始找 2个for循环 要求字符满足截取最后一个字符直到最后一个元素 截取的结果都会在这个数组中
 * for(let i = 0; i< array.length; i++) {
 *  for(let j = i+1; j< array.length; i++) {
 *  }
 * }
 */
const arr = [
  "bewwlm",
  "bewwln",
  "bewwl",
  "abewwle",
  "abewwl",
  "abeww",
  "bewwwwwui",
  "beww",
  "bew",
  "be",
  "b",
];

function getMaxString(data) {
  let count = 0;
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const str = data[i].substr(0, data[i].length - 1);
    if (data.includes(str)) {
      const strLen = str.length;
      if (strLen > count) {
        result = [data[i]];
        count = strLen;
      } else if (strLen === count) {
        result.push(data[i]);
      }
    }
  }

  if (result.length === 1) {
    return result[0];
  }

  let maxAscii = 0;
  let str = "";
  for (let j = 0; j < result.length; j++) {
    const strAscii = result[j].split("").reduce((p, c) => {
      const ascii = c.charCodeAt();
      return p + ascii;
    }, 0);
    if (strAscii > maxAscii) {
      maxAscii = strAscii;
      str = result[j];
    }
  }
  console.log(result, "result");
  return str;
}

console.log(getMaxString(arr));
