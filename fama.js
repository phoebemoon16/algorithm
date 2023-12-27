/**称砝码问题
 * 现有n种砝码，重量互不相等，分别为 m1,m2,m3…mn ；
每种砝码对应的数量为 x1,x2,x3...xn 。现在要用这些砝码去称物体的重量(放在同一侧)，问能称出多少种不同的重量。
1 1 2  
 */

let typeNum = 2;
let weight = "1 2".split(" "); // 分别有1个重量2个重量的砝码
let num = "2 1".split(" "); // 砝码的个数分别为2和1
let res = new Set([0]); // 用数组 当数据过多时会超时
for (let i = 0; i < weight.length; i++) {
  let tmp = [...res];
  for (let j = 1; j <= num[i]; j++) {
    tmp.forEach((item) => {
      res.add(item + j * weight[i]);
    });
  }
}
console.log(res.size);
