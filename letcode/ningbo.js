/*
 * @Author: wanghh
 * @Date: 2024-06-04 08:34:38
 * @LastEditors: wanghh
 * @LastEditTime: 2024-06-04 10:29:39
 * @Description:
 */
/** 回溯
 * 给定两个整数n和k，返回范围[1,n]中所有可能的k个数的组合，可以按任意顺序返回答案；
/**
 * 
示例1
输入：n = 4，k = 2
输出：[ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
示例2
输入：n = 1，k = 1
输出：[ [ 1 ] ]
 * 
 */
function solution(n, k) {
  let result = [];
  function backTrack(start, path) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < n; i++) {
      path.push(i + 1);
      backTrack(i + 1, path);
      path.pop();
    }
  }
  backTrack(0, []);
  return result;
}
console.log(solution(4, 2));

/**
 * 实现createProxy方法，使计算结果能够满足以下预期
const add = createProxy();
const r1 = add[1][2][3] + 4 // 期望结果 10
const r2 = add[10][20] + 30 // 期望结果 60
const r3 = add[100][200][300] + 400 // 期望结果 1000

console.log(r1) // 10
console.log(r2) // 60
console.log(r3) // 1000

利用proxy的get属性 可以去操作参数 add[1][2][3] 可以链式调用
 */

const add = new Proxy(
  { value: 0 },
  {
    // proxy 实现链式调用的累加
    get(target, property) {
      console.log(target, property);
      // +4 是一个 symbol.toPrimitive 转换到原始值
      if (property === Symbol.toPrimitive) {
        return () => {
          console.log(target, "symbol 33");
          return target.value;
        };
      }
      let newValue = target.value + Number(property);
      // this是方便后续链式调用
      return new Proxy({ value: newValue }, this);
    },
  }
);

console.log("add", add[1][2][3] + 4);

/** 去重数组对象
 * 也要注意顺序问题
 */

function removeDepulicates(arr) {
  const seen = new Set();
  return arr.filter((item) => {
    // 对item进行序列化 为了防止乱序的情况 导致元素不一致
    // const serialized = JSON.stringify(item, Object.keys(item).sort());
    const serialized = JSON.stringify(item, Object.keys(item).sort());
    return seen.has(serialized) ? false : seen.add(serialized);
  });
}

const arr = [
  { a: 1, b: 2 },
  { b: 2, a: 1 },
  { a: 2, b: 2, c: { d: 1 } },
  { c: { d: 1 }, a: 2, b: 2 },
];

const uniqueArr = removeDepulicates(arr);
console.log(uniqueArr);

async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");

// 宏任务最后一次执行
setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
