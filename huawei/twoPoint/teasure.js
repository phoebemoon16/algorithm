/** 题目描述；
橱窗里有一排宝石，不同的宝石对应不同的价格，宝石的价格标记为gems[i]，0 <= i < n，n = gems.length;
宝石可同时出售0个或多个，如果同时出售多个，则要求出售的宝石编号连续;
例如客户最大购买宝石个数为m，购买的宝石编号必须为:gems[i]，gems[i+1]，…，gems[i+m-1]，0 <= i < n，m <= n;
假设你当前拥有总面值为value的钱，请问最多能购买到多少个宝石，如无法购买宝石，则返回0

输入描述:
第一行输入n，参数类型为int，取值范围:[0,10^6]，表示橱窗中宝石的总数量。
之后n行分别表示从第0个到第n-1个宝石的价格，即gems[0]到 gems[n-1]的价格，类型为int，取值范围:(0,1000]。
之后一行输入v，类型为int，取值范围:[0,10^9]，表示你拥有的钱。

输出描述:
输出int类型的返回值，表示最大可购买的宝石数量。 

7 [5,4,6,3,1,6,7] 10
*/
function solution(n, array, value) {
  let left = 0;
  let right = 1;
  let result = [];
  let temValue = array[left];
  if (array.length === 0) {
    return;
  }
  while (left < n) {
    temValue += array[right];
    console.log(left, right);
    if (temValue <= value && right < n) {
      //   result.push(array.slice(left, right + 1)); 放所以满足条件的珠宝
      //   result.push([left, right]); 放满足条件的珠宝的索引
      //   console.log(right, left, "***");
      result.push(right - left + 1); // 放连续满足条件的珠宝个数 返回最大即可 Math.max(...result)
      right++;
    } else {
      left++;
      right = left === n - 1 ? left : left + 1;
      temValue = left === n - 1 ? 0 : array[left];
    }
  }
  return result;
}
// console.log(solution(7, [5, 4, 6, 3, 1, 6, 7], 10));
// console.log(solution(9, [1, 1, 1, 1, 1, 1, 1, 1, 1], 10));

console.log(solution(7, [8, 4, 6, 3, 1, 6, 7], 10));
