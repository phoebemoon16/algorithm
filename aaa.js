/*
 * @Author: wanghh
 * @Date: 2024-05-17 15:45:12
 * @LastEditors: wanghh
 * @LastEditTime: 2024-05-17 17:00:05
 * @Description:
 */
/** 变量
 * var 定义的是函数作用域
 * let const 是块级作用域
 * 块级作用域是函数作用域的子级
 *
 * var:
 * 1 存在变量提升现象
 * 2.定义在函数中的变量，执行后就会被销毁，再次调用会报错. 想要解决就需要去掉var变量。
 *
 * let const
 * 1.存在暂时性死区
 * const：声明时也必须同时初始化变量。
 * 尝试修改const声明的变量是会报错的。但是如果是引用类型，修改对象内部的属性是不违反const的规则的。
 *
 * 数据类型
 * undefined == null true
 * undefined === null false
 *
 */
// 1.变量提升现象
function foo() {
  console.log(age);
  var age = 26;
}
foo(); // undefined

// 2.定义在函数中的变量，执行后就会被销毁，再次调用会报错
// 去掉var关键字即可解决（但是不建议，因为变量定义会变困难）
function test() {
  // var message = "hi"; // 局部变量
  message = "hi";
  console.log(message, "function");
}
test();
console.log(message, "global"); // 出错！

// 重复声明不会报错
var name = 10;
var name = 20;

// 重复声明会报错 且不能用window去进行读取，因为会读取不到
let age = 10;
// let age = 20;
console.log(age, "age");

for (var i = 0; i < 5; ++i) {
  // 循环逻辑
  setTimeout(() => console.log(i), 0);
}
console.log(i); // 5

let pro = new Promise((resolve, reject) => {
  // reject;
  // 1秒后状态改为reject,并执行then的第二个参数
  setTimeout(reject, 1000);
  // setTimeout(resolve, 3000);
});
pro
  .then(
    () => {
      console.log(111);
    },
    () => {
      console.log(222);
      // 抛出错误去catch函数
      throw new Error("wrong");
    }
  )
  .catch(() => {
    console.log(333);
  });
