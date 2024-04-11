/*
 * @Author: wanghh
 * @Date: 2024-04-08 16:33:12
 * @LastEditors: wanghh
 * @LastEditTime: 2024-04-09 16:24:10
 * @Description:
 */
// 定义上下浮动的范围
const fluctuation = 17309.62;

// 定义需要找到的数字个数和目标总和
const numCount = 6;
const targetSum = 104297.77;

// 定义结果数组
let result = [];

// 计算每个数字的平均值
const average = targetSum / numCount;

// 生成随机数，并将其加入结果数组
for (let i = 0; i < 3; i++) {
  // 生成一个在 [-fluctuation, fluctuation] 范围内的随机浮动值
  const randomFluctuation = Math.random() * 200 + fluctuation;
  // 计算当前数字的值
  const currentNum = randomFluctuation;
  // 将当前数字加入结果数组
  result.push(currentNum);
}

for (let i = 0; i < 3; i++) {
  // 生成一个在 [-fluctuation, fluctuation] 范围内的随机浮动值
  const randomFluctuation = fluctuation - Math.random() * 200;
  // 计算当前数字的值
  const currentNum = randomFluctuation;
  // 将当前数字加入结果数组
  result.push(currentNum);
}

//
// 输出结果数组
console.log(result);
