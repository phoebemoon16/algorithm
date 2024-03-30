/**
 * 围棋的气
 * 题目描述:
围棋棋盘由纵横各19条线垂直相交组成，棋盘上一共19x19=361个交点，
对弈双方一方执白棋，一方执黑棋，落子时只能将棋子置于交点上。
"气"是围棋中很重要的一个概念，某个棋子有几口气，是指其上下左右方向四个相邻的交叉点中，有几个交叉点没有棋子
在计算气数时，首先将己方棋子的位置和周围四个方向的位置添加到集合中，然后减去敌方棋子占据的位置来得到最终的气数
现在，请根据输入的黑棋和白棋得到坐标位置，计算黑棋和白棋一共各有多少气?

输入描述:
输入包含两行数据
每行数据以空格分隔，数据个数是2的整数倍，每两个数是一组，代表棋子在棋盘上的坐标;
坐标的原点在棋盘左上角点，
第一行表示黑棋的坐标，第二行表示白棋的坐标。
每行中每两个数值为一对坐标值
第一个值是行号，范围从0到18
第二个值是列号，范围从0到18.
题目保证输入两行数据，无空行且每行按前文要求是偶数个，每个坐标不会超出棋盘范围。

输出描述:
两个数字以空格分隔，第一个数代表黑棋的气数，第二个数代表白棋的气数。

解析输入的坐标字符串，将坐标转换为整数数组
用例
输入:
0 5 8 9 9 10
5 0 9 9 9 8
输出:
8 7
说明：
在这个例子中，我们有两组棋子的坐标。第一组是黑棋的坐标，第二组是白棋的坐标。
首先，得到两个整数数组，分别代表黑棋和白棋的位置。
黑棋的坐标数组为:{(0 5),(8 9),(9 10)}
白棋的坐标数组为:{(5 0),(9 9),(9 8)}
然后，我们计算每组棋子的"气"
对于黑棋，我们检查每个棋子周围的四个位置，得到的"气"的坐标集合为:
{(0 4),(0 6),(1 5),(7 9),(8 8),(8 10),(9 9),(9 11),(10 10)}
然后，我们从这个集合中减去黑棋的位置和白棋占据的位置，得到最终的"气"的数量为8。
对于白棋，我们同样检査每个棋子周围的四个位置，得到的"气"的坐标集合为:
{(4 0),(5 1),(6 0),(8 9),(9 8),(9 10),(10 9),(10 8)}
然后，我们从这个集合中减去白棋的位置和黑棋占据的位置，得到最终的"气"的数量为7。
所以，黑棋的"气"的数量为8，白棋的"气"的数量为7.

解题思路：
1.先求出 黑白棋的 横纵坐标
2.先根据横坐标和纵坐标 生成一个二维数组
3.根据坐标去占位置
4.求没有棋子的 左右上下 有没有棋子 如果有 就是气 如果棋子同色那么只能算一次 如果不同色 都可加

技术点：
1.生成二维数组 new Array(19).fill(0).map(() => new Array(19).fill(0))
2.数组分割为2个2个一组 arr.slice(i, i+2)  for(XXX, i+=2) i记得每次加2
 */

function solution(arr1, arr2){
    // 保证棋子数是2的倍数
    if(arr1.length % 2 !== 0 || arr2.length % 2 !== 0){
        return 
    }
    // 生成一个二维数组
    let goArr = new Array(19).fill(0).map(() => new Array(19).fill(0))

    // 规划黑白棋子坐标并绘制到棋盘上 其实没有必要分割黑白棋坐标 只要绘制其在棋盘上的位置就行
    // let balckArray = splitArray(arr1, 1)
    // let whiteArray = splitArray(arr2, 2)
    splitArray(arr1, 1)
    splitArray(arr2, 2)
    function splitArray(array, n){
        // const result = []
        for(let i = 0; i<array.length; i+=2) {
            goArr[array[i]][array[i+1]] = n
            // result.push(array.slice(i, i+2))
        }
        // return result
    }
    
    // 定义偏移量
    const offset = [
        [-1,0],[1,0],[0,-1],[0,1]
    ]

    let blackGo = 0
    let whileGo = 0
    // 将黑白棋子放在坐标上
    for(let i = 0; i<goArr.length; i++) {
        for(let j = 0; j<goArr.length; j++) {
            // 如果这个坐标为空且其上下左右有值 说明他就是气
            if(goArr[i][j] === 0) {
                let isBlack = false
                let isWhite = false
                for(let [offsetX, offsetY] of offset) {
                    const newI = offsetX + i
                    const newJ = offsetY + j
                    if (newI < 0 || newJ >= 19 || newI >= 19 || newJ < 0) continue
                    // 这样做会有个问题 就是同色的气会重合 上下左右如果有多个同色的棋子 那也只算一个 下面做法会算多个 会导致多加
                    // if(goArr[newI][newJ] === 1) {
                    //     blackGo++
                    // }
                    // if(goArr[newI][newJ] === 2) {
                    //     whileGo++
                    // }
                    isBlack = isBlack || goArr[newI][newJ] === 1
                    isWhite = isWhite || goArr[newI][newJ] === 2
                }
                if(isBlack) blackGo++
                if(isWhite) whileGo++

            }
        }
    }

    // console.log(balckArray, whiteArray, goArr)
    return [blackGo,whileGo]
}

console.log(solution([0,5,8,9,9,10], [5,0,9,9,9,8]))