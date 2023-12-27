/*
 * @Author: wanghh
 * @Date: 2023-03-08 16:31:54
 * @LastEditors: wanghh
 * @LastEditTime: 2023-03-08 16:45:57
 * @Description: 成绩排名
 */
let inputArray = ["b 44", "b 10", "uyvt 10"];
let asc = 1; //
let gradeArray = [];
inputArray.forEach((item) => {
  gradeArray.push(item.split(" ")[1]);
});
function ascFun(a, b) {
  return a - b;
}
function descFun(a, b) {
  return b - a;
}
gradeArray = gradeArray.sort(asc == 1 ? ascFun : descFun);
let resultArray = [];
// 重名的话 就按成绩排序 成绩相同的话就按输入的顺序排序
gradeArray.forEach((val) => {
  inputArray.forEach((item) => {
    if (item.split(" ")[1] == val) {
      console.log(item.split(" ")[0], val);
      resultArray.push(`${item.split(" ")[0]} ${val}`);
      //   resultArray[item.split(" ")[0]] = val;
    }
  });
});
console.log(resultArray);
[...new Set(resultArray)].forEach((item) => {
  console.log(item);
});
// Object.keys(resultArray).forEach((item) => {
//   console.log(`${item} ${resultArray[item]}`);
// });
