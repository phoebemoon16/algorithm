/**
 * 开发一个坐标计算工具， A表示向左移动，D表示向右移动，W表示向上移动，S表示向下移动。从（0,0）点开始移动，从输入字符串里面读取一些坐标，
 * 并将最终输入结果输出到输出文件里面。
 * A10,S20,W10,D30,X,A1A,B10A11,,A10,
 * 正则不会 可以这样去做 isNaN Number
 */
// * /^(A|D|W|S){1}[0-9]{1,2}$/;  第一个字符是A D W S 中的任意一个 第二个第三个字符是0-9 也可以没有第三个字符
//  怎么判断字符串数字 isNaN 返回false 或者使用正则[0-9]

let tokens = [
  "S87",
  "S7",
  "W56",
  "S75",
  "A8",
  "S84",
  "W23",
  "W19",
  "W40",
  "D73",
  "S87",
  "A39",
  "W97",
  "W78",
  "A53",
  "D16",
  "D15",
  "A50",
  "W41",
  "S87",
  "D47",
  "W56",
  "D56",
  "A23",
  "A91",
  "S25",
  "D61",
  "D53",
  "D58",
  "W88",
  "W58",
  "S61",
  "D69",
  "W74",
  "D89",
  "A92",
  "D39",
  "D62",
  "S78",
  "W72",
  "W73",
  "W35",
  "S76",
  "W35",
  "S36",
  "W39",
  "A4",
];
let x = 0;
let y = 0;
// let reg = /^[0-9]+.?[0-9]*/;
let reg = /^(A|D|W|S){1}[0-9]{1,2}$/;
// let arr = tokens.filter((item) => reg.test(item));
// 我自己的做法
let arr = tokens
  .filter((item) => item.length >= 2)
  .filter((val) => !isNaN(val.slice(1, 2)) && !isNaN(val.slice(2, 3)));
console.log(arr, "arr");
arr.forEach((val) => {
  if (val.split("")[0] === "A") {
    console.log(val.slice(1, 3), "A");
    x = x - Number(val.slice(1, 3));
  } else if (val.split("")[0] === "S") {
    y = y - Number(val.slice(1, 3));
  } else if (val.split("")[0] === "W") {
    y = y + Number(val.slice(1, 3));
  } else if (val.split("")[0] === "D") {
    console.log(val.slice(1, 3), "D");
    x = x + Number(val.slice(1, 3));
  }
});
let array = [x, y];
// 278 181
console.log(array.join());
