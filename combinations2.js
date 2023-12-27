/*
 * @Author: wanghh
 * @Date: 2023-03-09 17:23:15
 * @LastEditors: wanghh
 * @LastEditTime: 2023-03-09 17:41:27
 * @Description:
 */
/**排列组合问题
 * 给你 一串字符串找出可能的排列组合的情况
 * 构思： 2个for循环
 * 'abc' -》abc acb bac bca cab cba  写到这 感觉要用递归了 已某个字符开头最后再去重即可
 *  需要用到排序算法 回溯，这种排列组合的最常用的就是回溯算法
 */

let S = "abc";
let arr = S.split("").sort();
let res = [];
function backtrack(track, store) {
  console.log(track, store, "store9090");
  if (store.length === 0) {
    res.push([...track]);
    return;
  }
  // 【关键1】只需要循环未遍历的元素集合
  for (let i = 0; i < store.length; i++) {
    // 【关键2】如果该元素和上一次遍历的元素重复则跳过
    if (store[i] === store[i - 1]) continue;
    track.push(store[i]);
    backtrack(
      track,
      store.filter((_, idx) => idx !== i)
    );
    console.log(track, i, store, 9999);
    track.pop();
  }
}
backtrack([], arr);
console.log(res.map((item) => item.join("")));
