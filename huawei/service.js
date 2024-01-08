/**
 * 服务器的个数
 * 在一个机房中，服务器的位置标识在 n*m 的整数矩阵网格中，1 表示单元格上有服务器，0 表示没有。如果两台服务器位于同一行或者同一列中紧邻的位置，则认为它们之间可以组成一个局域网。

请你统计机房中最大的局域网包含的服务器个数。

输入描述
第一行输入两个正整数，n和m，0<n,m<=100
之后为n*m的二维数组，代表服务器信息

输出描述
最大局域网包含的服务器个数。

用例1
输入
2 2
1 0
1 1
输出
3
说明
[0][0]、[1][0]、[1][1]三台服务器相互连接，可以组成局域网

我的思路： 先找到一个服务器，然后深度优先

 */
function solution(n,m,graph) {
    let ans = 0
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(graph[i][j] === 1) {
                console.log(i, j, n, m, '====')
                ans = Math.max(ans, dfs(i,j,n,m))
            }
        }
    }
    return ans
}

const offsets = [
    [-1,0],
    [1,0],
    [0,-1],
    [0,1]
]

// 找到其相邻的位置为1的 count++
function dfs(i,j,n,m){
    let count = 1
    const queue = [[i,j]]

    while(queue.length > 0) {
        const [x,y]= queue.shift() // 取出第一个元素
        for(let [offsetx, offsety] of offsets) {
            let newX = x + offsetx
            let newY = y + offsety
            console.log(x,y,newX, newY)
            if(newX >=0 && newX < n && newY >=0 && newY < m && graph[newX][newY] === 1) {
                count++
                graph[newX,newY] = 0
                queue.push([newX,newY])
            }
        }
    }
    return count
}

const graph = [[1,0],[1,1]]
console.log(solution(2,2,graph))