/**
 * 删除字符串最少的字符,这个字符可能是一个可能是多个
 */
let str;
str = "aabbcdde";
let obj = {};
for (let i = 0; i < str.length; i++) {
  if (Object.keys(obj).includes(str[i])) {
    obj[str[i]]++;
  } else {
    obj[str[i]] = 1;
  }
}
let lessNum = Object.values(obj).sort((a, b) => a - b)[0];
// 这个也是可以取到最小值
Math.min(Object.values(obj));
let lessChar = [];

Object.entries(obj).forEach((key) => {
  console.log(key, "key");
  if (key[1] == lessNum) {
    lessChar.push(key[0]);
  }
});
let filterChar = str
  .split("")
  .filter((item) => !lessChar.includes(item))
  .join("");
console.log(obj, lessNum, lessChar, filterChar, "obj90");
