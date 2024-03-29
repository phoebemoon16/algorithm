/**
 * 孙悟空爱吃蟠桃，有一天趁着蟠桃园守卫不在来偷吃。已知蟠桃园有 N 棵桃树，每颗树上都有桃子，守卫将在 H 小时后回来。

孙悟空可以决定他吃蟠桃的速度K（个/小时），每个小时选一颗桃树，并从树上吃掉 K 个，如果树上的桃子少于 K 个，则全部吃掉，并且这一小时剩余的时间里不再吃桃。
孙悟空喜欢慢慢吃，但又想在守卫回来前吃完桃子。
请返回孙悟空可以在 H 小时内吃掉所有桃子的最小速度 K（K为整数）。如果以任何速度都吃不完所有桃子，则返回0。

输入描述
第一行输入为 N 个数字，N 表示桃树的数量，这 N 个数字表示每颗桃树上蟠桃的数量。
第二行输入为一个数字，表示守卫离开的时间 H。
其中数字通过空格分割，N、H为正整数，每颗树上都有蟠桃，且 0 < N < 10000，0 < H < 10000。

输出描述
吃掉所有蟠桃的最小速度 K，无解或输入异常时输出 0。

用例1
输入
2 3 4 5
4
输出
5
用例2
输入
2 3 4 5
3
输出
0
用例3
输入
30 11 23 4 20
6
输出
23

解题思路： 先排序
1.如果桃树的数量和小时数相等，就返回桃树数组中最大的值
2.如果桃树的属性大于小时数，直接返回0 吃不完
3.如果桃树的数量小于小时数，逻辑复杂点：
求最小速度：先找最大速度（桃树上的最大果实树） 然后二分逐渐找最小速度 直到最小速度大于最大速度
 */

function solution(piles, H) {
  let left = 1; // 最小吃的速度
  let right = Math.max(...piles); // 最大吃的速度
  // 如果小时数小于桃树的数量 那怎么吃都吃不完 所以直接返回0
  if (H < piles.length) {
    return 0;
  }
  if (H === piles.length) {
    return Math.max(...piles);
  }
  while (left <= right) {
    // mid为每次吃几个 先设置中间位置的速度
    const mid = Math.floor((left + right) / 2);
    if (canEatAll(piles, H, mid)) {
      right = mid - 1; // 能全部吃完 最大速度就减一
    } else {
      left = mid + 1; // 不能全部吃完 就最小吃的速度加1
    }
  }
  //直到能吃完的最大速度和最小速度相等 或者最大大于最小 即可
  return left;
}

//
function canEatAll(piles, H, speed) {
  let hourNeed = 0;
  for (const pile of piles) {
    hourNeed += Math.ceil(pile / speed); // 返回给定大于等于数字的最大整数 Math.ceil(4 / 3） 为2
  }
  console.log(piles, hourNeed, speed, "hourNeed");
  return hourNeed <= H;
}
console.log(solution([2, 3, 4, 5], 4));
console.log(solution([2, 3, 4, 5], 3));
console.log(solution([30, 11, 23, 4, 20], 6));
