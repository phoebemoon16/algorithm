
/** 
 * 测试 最大跳跃步数
 */
function jump(array) {
    let maxStep = 0
    for (let i = 0; i < array.length; i++) {
        if (i <= maxStep) {
            maxStep = Math.max(i + array[i], maxStep)
            if (maxStep >= array.length - 1) return true
        }
    }
    return false
}

/**
 * 最大温度 和C卷 找朋友
 */
function maxTeam(array) {
    let result = new Array(array.length).fill(0)
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = i + 1; j < array.length; j++) {
    //         if (array[j] > array[i]) {
    //             result[i] = j
    //             break;
    //         }
    //     }
    // }
    let statck = []
    for (let i = 0; i < array.length; i++) {
        // 75  71 69 72 76 73
        while (statck.length > 0 && array[statck[statck.length - 1]] < array[i]) {
            let index = statck.pop()
            res[index] = i - index
        }
        statck.push(i)
    }
}

/** 不同路径的问题
 * m*n的表格 问有多少种走到终点的方法 只能向右走和向下走
 */
function differentDiff(m, n) {
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    dp[0][0] = 1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = 1
            }
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
        }
    }
    return dp[m - 1][n - 1]
}

/** 
 * 最长公共前缀
 * 
 */
function maxQian(array) {
    let maxStr = ''
    for (let i = 0; i < array[0].length; i++) {
        let str = array[0][i]
        for (let j = 1; j < array.length; j++) {
            if (str !== array[j][i] || !array[j][i]) {
                return maxStr
            } else if (j === array.length - 1) {
                maxStr += str
            }
        }
    }
    return maxStr
}

/** 
 * 合并区间
 * 
 */
function joinPart(array){
    array.sort((a,b) => a[0] - b[0])
    let result = []
    let i =0
    let j = 0
    let n = array.length
    while(i < n) {
        let cur = array[i]
        j = i+1
        while(j < n && cur[1] > array[j][0]) {
            cur[1] = Math.max(cur[i], array[j][1])
            j++
        }
        i = j
        result.push(cur)
    }
    return res

}

/** 
 * 二叉树的层序遍历
 *  */
function levelMap(root){
    let result = []
    const stack = []
    stack.push(root)
    while(stack.length > 0) {
        const total = stack.length
        result.push([])
        for(let i  =0; i<total; i++) {
            const node = stack.shift()
            result[result.length -1].push(node.val)
            if(node.left) stack.push(node.left)
            if(node.right) stack.push(node.right)
        }
    }

}


// 构造二叉树
class TreeNode {
    constructor(value, left = 0, right = 0) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  //  将此数组转换为二叉树 记得for循环加2
  function buildTreeFromArray(arr) {
    if (arr.length === 0) return null;
  
    const queue = [];
    const root = new TreeNode(arr[0]);
    queue.push(root);
  
    // 分别循环增加左右节点
    for (let i = 1; i < arr.length; i += 2) {
      const current = queue.shift();
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]);
        queue.push(current.left);
      }
      if (i + 1 < arr.length && arr[i + 1] !== null) {
        current.right = new TreeNode(arr[i + 1]);
        queue.push(current.right);
      }
    }
  
    return root;
  }