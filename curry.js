/*** 函数柯里化 */
function solution(a) {
  return function (b) {
    return a + b;
  };
}

// 采用箭头函数
const add = (x) => (y) => (z) => x + y + z;
console.log(solution(1)(2));

// 第二个参数能被调用 是因为上一个返回也是一个函数 直到最后一个函数返回数字
console.log(add(1)(2)(3));

/**
 * 函数合成
 */

const compose = (f) => (g) => (x) => f(g(x));
const f = compose((x) => x * 4)((x) => x + 3);
f(2); // 20
