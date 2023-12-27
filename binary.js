/**
 * 进制转换问题 输入一个16进制，转换一个十进制
 *例如： 0XAA -》 0 * Math.pow(16, 2) + 11*Math.pow(16, 1) + 11*Math.pow(16,0)
 0x2c = 2 * 16 + 12*1
 技术点：
 1.replace 同时替换多个字符串
 2.js的幂计算 Math.pew(3,3) 3*3*3 第二个参数是多少次幂
 3.字符大写、小写 toUpperCase() toLowCase()
 * */

let str = "0x2C";
// 将大X 小x全部替换为空
let spliceStr = str.replace(/\x|X/g, "");
let obj = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};
let num = 0;
for (let i = 0; i <= spliceStr.length - 1; i++) {
  let j = spliceStr[i];
  if (Object.keys(obj).includes(spliceStr[i])) {
    j = obj[spliceStr[i]];
  }
  num += Number(j * Math.pow(16, spliceStr.length - i - 1));
  console.log(j, spliceStr.length - i - 1);
}
console.log(num);
