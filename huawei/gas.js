/** 
 * 有一辆汽车需要从 m * n 的地图左上角（起点）开往地图的右下角（终点），去往每一个地区都需要消耗一定的油量，加油站可进行加油。

请你计算汽车确保从从起点到达终点时所需的最少初始油量。

说明：

智能汽车可以上下左右四个方向移动
地图上的数字取值是 0 或 -1 或 正整数：

-1 ：表示加油站，可以加满油，汽车的油箱容量最大为100；
0 ：表示这个地区是障碍物，汽车不能通过
正整数：表示汽车走过这个地区的耗油量
 
如果汽车无论如何都无法到达终点，则返回 -1
输入描述
第一行为两个数字，M，N，表示地图的大小为 M * N

0 < M,N ≤ 200
后面一个 M * N 的矩阵，其中的值是 0 或 -1 或正整数，加油站的总数不超过 200 个

输出描述
如果汽车无论如何都无法到达终点，则返回 -1

如果汽车可以到达终点，则返回最少的初始油量

解题思路：
1.计算当前油量的剩余量
2.遇到-1 剩余为0
3.遇到0 return 遇到剩余 > 100 return


总终点开始遍历
首先，我们需要建立一个二维数组 dp，其中 dp[x][y] 表示从终点到达 (x, y) 的最小油耗。
从终点开始进行广度优先搜索（BFS），将节点加入到优先队列中，并根据消耗的油量进行排序。
在每一步搜索中，我们考虑当前节点的四个邻居节点，如果邻居节点是合法的（不超出边界且不是障碍物），则计算到达邻居节点的油耗。
如果邻居节点是加油站，则油耗为0；否则，油耗为当前节点油耗加上到达邻居节点的耗油量。
如果到达邻居节点的油耗小于其当前记录的油耗，更新 dp 数组，并将该节点加入到优先队列中。
最终，我们只需检查起点 (0, 0) 的最小油耗是否不超过 100，如果超过则返回 -1，否则返回最小油耗。

代码中使用了优先队列来存储待探索的节点，以及一个二维数组 dp 来记录每个节点的最小油耗。

在每一步搜索中，我们从优先队列中取出一个节点进行探索，并更新 dp 数组。

 */

// 70 第一用例
console.log(
  solution(2, 2, [
    [10, 20],
    [30, 40],
  ])
);

// 70 第二用例
console.log(
  solution(4, 4, [
    [10, 30, 30, 20],
    [30, 30, -1, 10],
    [0, 20, 20, 40],
    [10, -1, 30, 40],
  ])
);
// 第三用例 60
console.log(
  solution(4, 5, [
    [10, 0, 30, -1, 10],
    [30, 0, 20, 0, 20],
    [10, 0, 10, 0, 30],
    [10, -1, 30, 0, 10],
  ])
);

// -1
console.log(
  solution(4, 4, [
    [10, 30, 30, 20],
    [30, 30, 20, 10],
    [10, 20, 10, 40],
    [10, 20, 30, 40],
  ])
);

// -1 到达加油站 所有路径的最小都是大于100的情况
console.log(
  solution(4, 4, [
    [10, 10, 10, 10],
    [30, 30, 20, -1],
    [10, 20, 50, 60],
    [10, 20, 50, 40],
  ])
);


console.log(
    solution(6, 4, [
      [10, 10, 10, 10],
      [3, 10, 20, -1],
      [10, 0, -1, 60],
      [10, -1, 50, 20],
      [10, 20, 30, 10],
      [10, 20, 50, 10]
    ])
  );
  

  console.log(
    solution(2, 1, [
      [10],[0]
    ])
  );

  console.log(
    solution(2, 1, [
      [0],[10]
    ])
  );

  console.log(
    solution(3, 3, [
      [10, -1, 40],[30, 0, 50],[50, -1, 40]
    ])
  );


function solution(m,n,map){
    const offsets = [
        [0, 1],
        [-1, 0],
        [0, -1],
        [1, 0],
    ]
    // let dp = JSON.parse(JSON.stringify(map))
    // let visited = new Set()
    // visited.add((m-1) * n + (n-1))
    // let queue = [[m-1,n-1]]

    let queue = [[m - 1, n - 1]];
    let visited = new Set();
    visited.add((m - 1) * n + (n - 1));
    // 表示从终点到达的最小油耗
    const dp = JSON.parse(JSON.stringify(map));

    if(map[m -1][n -1] === 0 || map[m -1][n -1] === 0)  {
        return -1
    }

    while(queue.length > 0) {
        let node = queue.shift()
        let x = node[0]
        let y = node[1]


        for(let [offsetX, offsetY] of offsets) {
            let newX = offsetX + x
            let newY = offsetY + y

            if(newX < 0 || newX >= m || newY < 0 || newY >= n || map[newX][newY] === 0) {
                continue
            }
            const newPoint = newX * n + newY
            if(visited.has(newPoint)) {
                dp[newX][newY] = Math.min(dp[newX][newY], dp[x][y] + map[newX][newY])
            } else {
                // 如果之前的大于100 则说明不可达 不必置为0
                if (map[newX][newY] === -1) {
                    // dp[newX][newY] = 0; 针对到达此加油站的所有路径都是大于100的情况 这种时候 即使加油 也到不了终点
                    dp[newX][newY] = dp[x][y] > 100 ? dp[x][y] : 0;
                  } else {
                    dp[newX][newY] += dp[x][y];
                  }
                visited.add(newPoint)
                queue.push([newX, newY])
            }
        }

    }
    let result = dp[0][0] > 100 ? -1 : dp[0][0];
    return result
    // console.log(result,dp);
}