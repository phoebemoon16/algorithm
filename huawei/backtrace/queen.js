/**
 *研究的是如何将 n 个皇后放置在 n × n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 等价于要求任何两个皇后都不能在同一行、同一列以及同一条斜线上。

 输入： n  （1 <= n <= 9）
 输出： 多少种方法

 解题思路：
 1. 先绘制棋盘
 2. 递归的去放每一个皇后，（不符合条件的话）回溯去寻找另外一种可能
 */

function solution(n) {
  let array = new Array(n).fill(".").map(() => new Array(n).fill("."));
  //   console.log(array);
  let result = [];
  let count = 0;
  // 判断是否能放皇后  规则不能在同一行 同一列 统一斜线上
  function checkQueen(row, col, array, n) {
    // 不能在同一列 col
    for (let i = 0; i < row; i++) {
      if (array[i][col] === "Q") {
        return false;
      }
    }

    // 不能在斜线上 45度 135度 45:row+1 col+1  135:row+1 col-1 无法放在一个函数里面 因为135度的j是递减的
    // for (let i = row; i > 0; i--) {
    //   for (let j = col; j < n; j++) {
    //     if (array[i - 1][j + 1] === "Q" || array[i - 1][j - 1] === "Q") {
    //       return false;
    //     }
    //   }
    // }

    // 45度角
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (array[i][j] === "Q") {
        return false;
      }
    }
    //判断135度对角线是否包含
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; j--, i--) {
      if (array[i][j] === "Q") {
        return false;
      }
    }

    return true;
  }
  function backTrack(row, array) {
    if (row === n) {
      count++;
      //   console.log(array);
      result.push(JSON.parse(JSON.stringify(array)));
      return;
    }
    // 注意这个for循环 不能再从row开始了 因为是二维坐标 每个位置都有可能再取
    for (let i = 0; i < n; i++) {
      if (checkQueen(row, i, array, n)) {
        array[row][i] = "Q";
        backTrack(row + 1, array);
        array[row][i] = ".";
      }
    }
  }
  backTrack(0, array);
  console.log(result, "result00");
  return count;
}

console.log(solution(4));
