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

 */

function solution(m,n,map){
    const offset = [
       [1,0],[0,1]
    ]
    let queue = [[0,0]]
    let visited = new Set()
    const dp = JSON.parse(JSON.stringify(map))
    while(queue.length > 0) {
        let node  = queue.shift()
        let x = node[0]
        let y = node[1]
        console.log(node, x,y)
        if(map[x][y] > 100) continue
        if(map[x][y] == 0) continue
        if(map[x][y] == -1) { 
            map[x][y] = 0 
        }

        for (let [offsetX, offsetY] of offset) {
            const newX = offsetX + x
            const newY = offsetY + y
            if(newX < 0 || newX >= m || newY < 0 || newY >= n) continue
            const newPos = newX * n + newY;
            if (visited.has(newPos)) {
                map[newX][newY] = Math.min(map[x][y]+dp[newX][newY], map[newX][newY])
            } else {
                map[newX][newY] += map[x][y]
                queue.push([newX, newY])
                visited.add(newPos)
            }
        }

    }
    console.log(map, 'map---')
}


function solution2(m,n,map){
    const offset = [
       [1,0],[0,1]
    ]
    // let queue = [[0,0]]
    let visited = new Set()
    const dp = JSON.parse(JSON.stringify(map))
    const allPath = []
    // const currentPath = [map[0][0]]
    let queue = [[[map[0][0]],0,0]]
    while(queue.length > 0) {
        let node  = queue.shift()
        let x = node[1]
        let y = node[2]
        let currentPath = node[0]
        if(x === m && y === n && currentPath.length === m + n -1) {
            allPath.push(currentPath)
        }
        console.log(node, x,y)
        if(map[x][y] > 100) continue
        if(map[x][y] == 0) continue
        if(map[x][y] == -1) { 
            map[x][y] = 0 
        }

        for (let [offsetX, offsetY] of offset) {
            const newX = offsetX + x
            const newY = offsetY + y
            if(newX < 0 || newX >= m || newY < 0 || newY >= n) continue
            const newPos = newX * n + newY;
            // map[newX][newY] += map[x][y]
            if(map[newX][newY] == -1) {
                currentPath.push(0)
            } else {
                currentPath.push(map[x][y] + map[newX][newY])
            }
            queue.push([currentPath,newX, newY])
        }

    }
    console.log(allPath, 'map---')
}

// console.log(solution(2,2,[[10,20],[30,40]]))
// console.log(solution(4,4,[[110,30,30,20],[30,30,-1,10], [0,20,20,40], [10,-1,30,40]]))
console.log(solution2(4,4,[[10,30,30,20],[30,30,-1,10], [0,20,20,40], [10,-1,30,40]]))

console.log(solution2(2,2,[[10,20],[30,40]]))