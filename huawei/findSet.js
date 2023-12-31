/**
 *在一个大型体育场内举办了一场大型活动，由于疫情防控的需要，要求每位观众的必须间隔至少一个空位才允许落座。
  现在给出一排观众座位分布图，座位中存在已落座的观众，请计算出，在不移动现有观众座位的情况下，最多还能坐下多少名观众。
 
输入描述
一个数组，用来标识某一排座位中，每个座位是否已经坐人。0表示该座位没有坐人，1表示该座位已经坐人。
1 ≤ 数组长度 ≤ 10000
输出描述
整数，在不移动现有观众座位的情况下，最多还能坐下多少名观众。

用例1
输入
10001
输出
1

用例2
输入
0101
输出
0

// 获取出入的座位图
const desk = [...(await readline())];

我的思路： for循环 
当前位置为0 i+1为0 则加+1

缺陷： 怎么没有考虑到第一个和最后一个座位的情况

相似题型： 座位调整 不能相邻做 需要分开做
 */

function solution(str) {
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    if (str[i] == 0) {
      // 如果左右边都是0 第一个位置和最后一个位置特殊处理
      const leftIsEmpty = i == 0 || str[i - 1] == 0; // 左边为0 或者是第一个元素
      const rightIsEmpty = i == str.length - 1 || str[i + 1] == 0; // 右边为0 或者是最后一个元素
      if (leftIsEmpty && rightIsEmpty) {
        res++;
        str[i] = 1;
        i++; // 设为1可以不用跳过i+1 因为这个位置肯定不能做人
      }
    }
  }
  return res;
}
console.log(solution("0101"));
console.log(solution("1000100"));
