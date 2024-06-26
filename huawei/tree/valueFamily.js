/*
 * @Author: wanghh
 * @Date: 2024-01-03 09:45:14
 * @LastEditors: wanghh
 * @LastEditTime: 2024-01-03 10:59:18
 * @Description:
 */
/**
 * 最富裕的小家庭
 * 在一颗树中，每个节点代表一个家庭成员，节点的数字表示其个人的财富值，一个节点及其直接相连的子节点被定义为一个小家庭。
现给你一颗树，请计算出最富裕的小家庭的财富和。

输入描述
第一行为一个数 N，表示成员总数，成员编号 1~N。1 ≤ N ≤ 1000
第二行为 N 个空格分隔的数，表示编号 1~N 的成员的财富值。0 ≤ 财富值 ≤ 1000000
接下来 N -1 行，每行两个空格分隔的整数（N1, N2），表示 N1 是 N2 的父节点。

输出描述
最富裕的小家庭的财富和
用例：
4
100 200 300 500
1 2
1 3
2 4

1 2 3小家庭为600 2 4小家庭为700 

解题思路： 定义一个family数组，他的index的值表示当前节点的最大资产，在孩子节点的资产都放在父节点上，然后去财产的最大值，这就是最富裕的小家庭的财产数目


读取输入的值
 const n = parseInt(await readline());
 const wealth = (await readline()).split(" ").map(Number);

 wealth = waelth.unshift(0) index表示
 const family = [...wealth] 构造一个index为节点数，值为财富数的一个数组

 遍历节点树 将子节点的财产都放在family函数中
 for(let i = 0 ; i<n ; i++) {
    const [fa, ch] = realction[i]
    family[fa] += family[ch]
 }

 family 最大值就是最大财富数目
 Math.max(...family)
 */

function solution(n, wealth, relationShip) {
  wealth.unshift(0); // 从1开始为了让wealth数组索引对应成员编号1~n
  const family = [...wealth]; // 定义一个family的 索引值为节点值 值为财富数
  // console.log(family, 'faily')
  for (let i = 0; i < n - 1; i++) {
    const [fa, ch] = relationShip[i]; // 解构算法 自己就想不到这种方式
    family[fa] += wealth[ch]; // 把孩子的财富都积累到父节点上
    // console.log(family, "faily000");
  }
  return Math.max(...family); // 求出family的最大值 就是最富裕的小家庭的数值 其index就是最富裕的家庭的父节点 求具体富裕家庭的节点 也可以求出来
}

const wealth = [100, 200, 300, 500];
const relationShip = [
  [1, 2],
  [1, 3],
  [2, 4],
];

const wealth2 = [100, 200, 300, 400, 500];
const relationShip2 = [
  [3, 4],
  [3, 5],
  [1, 2],
  [1, 3],
];

console.log(solution(4, wealth, relationShip)); // 父节点为2的小家庭 是最为富裕的。
console.log(solution(5, wealth2, relationShip2)); // 下标为3（父节点）的财富最大
