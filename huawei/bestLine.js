/*
 * @Author: wanghh
 * @Date: 2024-01-09 08:10:34
 * @LastEditors: wanghh
 * @LastEditTime: 2024-01-16 09:50:16
 * @Description:
 */
/**
 * 
 * 评估一个网络的信号质量，其中一个做法是将网络划分为栅格，然后对每个栅格的信号质量计算。
路测的时候，希望选择一条信号最好的路线（彼此相连的栅格集合）进行演示。
现给出 R 行 C 列的整数数组 Cov，每个单元格的数值 S 即为该栅格的信号质量（已归一化，无单位，值越大信号越好）。
要求从 [0, 0] 到 [R-1, C-1]设计一条最优路测路线。返回该路线得分。

规则：
路测路线可以上下左右四个方向，不能对角
路线的评分是以路线上信号最差的栅格为准的，例如路径 8→4→5→9 的值为4，该线路评分为4。线路最优表示该条线路的评分最高。
输入描述
第一行表示栅格的行数 R
第二行表示栅格的列数 C
第三行开始，每一行表示栅格地图一行的信号值，如5 4 5

输出描述
最优路线的得分
备注
1 ≤ R，C ≤ 20
0 ≤ S ≤ 65535
用例1
输入
3
3
5 4 5
1 2 6
7 4 6
输出
4
说明
路线为：5→4→5→6→6

用例2
输入
6
5
3 4 6 3 4
0 2 1 1 7
8 8 3 2 7
3 2 4 9 8
4 1 2 0 0
4 6 5 4 3
输出
3
说明
路线为：3→4→6→3→4→7→7→8→9→4→3→8→8→3→4→4→6→5→4→3

解题思路： 动态规划
先建立一个与地图大小相同的二维数组，表示到达每个栅格时的最优得分
 */

function optimalScore(n, m, maps) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let maxScore = 0;

  // 判断当前判断坐标是否合法
  function isValid(x, y) {
    return x >= 0 && x < n && y >= 0 && y < m;
  }

  function dfs(x, y, minScore) {
    console.log(x, y, maps[x][y], minScore);
    minScore = Math.min(minScore, maps[x][y]);
    if (x === n - 1 && y === m - 1) {
      maxScore = Math.max(maxScore, minScore);
      return;
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (isValid(newX, newY)) {
        dfs(newX, newY, minScore);
      }
    }
  }
  dfs(0, 0, maps[0][0]);
  return maxScore;
}

let maps = [
  [3, 4, 6, 3, 4],
  [0, 2, 1, 1, 7],
  [8, 8, 3, 2, 7],
  [3, 2, 4, 9, 8],
  [4, 1, 2, 0, 0],
  [4, 6, 5, 4, 3],
];
console.log(optimalScore(6, 5, maps));
