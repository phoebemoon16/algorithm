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

function solution2(array){
    // 回溯递归求最小值
    function minPowerDifference(player, team1, team2, idx, total1, total2, type){

        if(idx === player.length) {
            if (type === "diff1"){
                console.log(idx, team1, team2, idx, total1, total2, type)
            }
            if (type === "diff2"){
                console.log(idx, team1, team2, idx, total1, total2, type)
            }
            return Math.abs(total1 - total2)
        }
        
        const diff1 = minPowerDifference(player, [...team1, player[idx]], team2, idx+1, total1+player[idx],total2, 'diff1')
        const diff2 = minPowerDifference(player, team1, [...team2, player[idx]], idx+1, total1, total2+player[idx], 'diff2')
        return Math.min(diff1, diff2)
    }
   let minDiff =  minPowerDifference(array, [],[],0,0,0)
   return minDiff

}

console.log(solution([3,5,2,1,9,8,6,7,4,10]))


 function solution(arr) {
    arr.sort((a, b) => a - b);
 
    const res = [];
    // dfs求10选5的去重组合，并将组合之和记录进res中，即res中记录的是所有可能性的5人小队实力值之和
    dfs(arr, 0, 0, 0, res);
   
    const sum = arr.reduce((p, c) => p + c);

    // 求解去重组合
    function dfs(arr, index, level, sum, res) {
        if (level === 5) {
            console.log(level, res)
            return res.push(sum);
        }

        for (let i = index; i < 10; i++) {
            // if (i > index && arr[i] == arr[i - 1]) continue; // arr已经升序，这里进行树层去重
            dfs(arr, i + 1, level + 1, sum + arr[i], res);
        }
    }
   
    // 某队实力为subSum，则另一队实力为sum - subSum，则两队实力差为 abs((sum - subSum) - subSum)，先求最小实力差
    const ans = res
      .map((subSum) => Math.abs(sum - 2 * subSum))
      .sort((a, b) => a - b)[0];
   
    console.log(ans);

    return ans
  
 }