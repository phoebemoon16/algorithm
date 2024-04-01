/**
 * 游戏分组
 * 题目描述
2020年题:
英雄联盟是一款十分火热的对战类游戏。每一场对战有10位玩家参与，分为两组，每组5人。
每位玩家都有一个战斗力，代表着这位玩家的厉害程度，为了对战尽可能精彩，我们需要把玩家们分为实力尽量相等的两组。
一组的实力可以表示为这一组5位玩家的战斗力和。现在，给你10位玩家的战斗力，请你把他们分为实力尽量相等的两组。
请你输出这两组的实力差。
2023年题:
部门准备举办一场王者荣耀表演赛，有10名游戏爱好者参与，分5为两队，每队5人。
每位参与者都有一个评分，代表着他的游戏水平.为了表演赛尽可能精彩，我们需要把10名参赛者分为实力尽量相近的两队。
一队的实力可以表示为这一队5名队员的评分总和。现在给你10名参与者的游戏水平评分，请你根据上述要求分队最后输出这两组的实力差绝对值。

输入描述: 
10个整数，表示10名参与者的游戏水平评分。范围在[1,10000]之间
输出描述:
1个整数，表示分组后两组实力差绝对值的最小值


要点： 递归回溯
 */

function solution2(array) {
  // 回溯递归求最小值
  function minPowerDifference(player, team1, team2, idx, total1, total2, type) {
    if (idx === player.length) {
      if (type === "diff1") {
        console.log(idx, team1, team2, idx, total1, total2, type);
      }
      if (type === "diff2") {
        console.log(idx, team1, team2, idx, total1, total2, type);
      }
      return Math.abs(total1 - total2);
    }

    const diff1 = minPowerDifference(
      player,
      [...team1, player[idx]],
      team2,
      idx + 1,
      total1 + player[idx],
      total2,
      "diff1"
    );
    const diff2 = minPowerDifference(
      player,
      team1,
      [...team2, player[idx]],
      idx + 1,
      total1,
      total2 + player[idx],
      "diff2"
    );
    return Math.min(diff1, diff2);
  }
  let minDiff = minPowerDifference(array, [], [], 0, 0, 0);
  return minDiff;
}

// console.log(solution([3,5,2,1,9,8,6,7,4,10]))
// console.log(solution([3, 5, 2, 1]));

function solution(arr) {
  arr.sort((a, b) => a - b);

  const res = [];
  // dfs求10选5的去重组合，并将组合之和记录进res中，即res中记录的是所有可能性的5人小队实力值之和
  dfs(arr, 0, 0, 0, res);

  const sum = arr.reduce((p, c) => p + c);

  // 求解去重组合 2 2组队
  function dfs(arr, index, level, sum, res) {
    if (level === 2) {
      return res.push(sum);
    }

    // arr [1,2,3,5]
    for (let i = index; i < 4; i++) {
      //   console.log(i, level, sum, res, 111);
      //   console.log(i + 1, level + 1, sum + arr[i], res, 222);
      // if (i > index && arr[i] == arr[i - 1]) continue; // arr已经升序，这里进行树层去重
      dfs(arr, i + 1, level + 1, sum + arr[i], res);
    }
  }

  // 某队实力为subSum，则另一队实力为sum - subSum，则两队实力差为 abs((sum - subSum) - subSum)，先求最小实力差
  const ans = res
    .map((subSum) => Math.abs(sum - 2 * subSum))
    .sort((a, b) => a - b)[0];

  console.log(res, ans);

  return ans;
}

/**
 *
 * @param {*} array
 * @returns
 *  给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
 *  或者本题中 给4个数 求22组合的所有的情况
 */
function solution3(array) {
  let result = [];
  array.sort((a, b) => a - b);
  function backTrack(start, path) {
    if (path.length === 2) {
      result.push(path.slice()); // 对path进行一个浅拷贝 否则的话后续path的修改会受到影响
      return;
    }

    for (let i = start; i < array.length; i++) {
      path.push(array[i]);
      backTrack(i + 1, path);
      //   console.log(path, "9999");
      path.pop(); // 回溯的关键步揍，回溯到上一步，以便进行下一步的尝试
    }
  }
  backTrack(0, []);
  return result;
}

// 在solution3的基础上增加求和操作
function solution4(array) {
  let result = [];
  array.sort((a, b) => a - b);
  function backTrack(start, path) {
    if (path.length === 2) {
      let pathTwo = JSON.parse(JSON.stringify(path));
      result.push(pathTwo.reduce((acc, cur) => acc + cur));
      return;
    }
    for (let i = start; i < array.length; i++) {
      path.push(array[i]);
      backTrack(i + 1, path);
      path.pop();
    }
  }
  backTrack(0, []);
  return result;
}

// 此题的最终解决方案
function solution5(array) {
  // 1.得到所有可能组合情况之和
  let result = [];
  array.sort((a, b) => a - b);
  function backTrack(start, path) {
    if (path.length === 5) {
      let pathTwo = JSON.parse(JSON.stringify(path));
      result.push(pathTwo.reduce((acc, cur) => acc + cur));
      return;
    }
    // 递归+回溯 直到所有的组合都获取到
    for (let i = start; i < array.length; i++) {
      path.push(array[i]);
      backTrack(i + 1, path);
      path.pop();
    }
  }
  backTrack(0, []);

  // 求总参数
  let sum = array.reduce((acc, cur) => acc + cur);

  //相求差值 再求和
  const diff = result
    .map((subSum) => Math.abs(sum - 2 * subSum))
    .sort((a, b) => a - b)[0];

  return diff;
}

// 可能组成的队伍组合
console.log(solution3([3, 5, 2, 1]));

// 可能组成的队伍组合之和
console.log(solution([3, 5, 2, 1]));

console.log(solution4([3, 5, 2, 1]), "444");

console.log(solution5([3, 5, 2, 1, 9, 8, 6, 7, 4, 10]), "555");
