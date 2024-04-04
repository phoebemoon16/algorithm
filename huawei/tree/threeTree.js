/** 3个节点树
 * 
 * 题目描述:
定义构造三又搜索树规则如下:
每个节点都存有一个数，当插入一个新的数时，从根节点向下寻找，直到找到一个合适的空节点插入。
查找的规则是:
如果数小于节点的数减去500，则将数插入节点的左子树
如果数大于节点的数加上500，则将数插入节点的右子树
否则，将数插入节点的中子树
给你一系列数，请按以上规则，按顺序将数插入树中，构建出一棵三又搜索树，最后输出树的高度,

输入描述:
第一行为一个数 N，表示有N个数，1 <= N <= 10000
第二行为N个空格分隔的整数，每个数的范围为[1,10000]

输出描述:
输出树的高度(根节点的高度为1)


输入： 
5
50000 2000 5000 8000 1800
 */

class TreeNode {
    constructor(value, height) {
        this.value = value
        this.height = height
        this.left = null
        this.middle = null
        this.right = null
    }
}

function solution(array){
    let tree =  []
    // for(let i = 0; i< array.length; i++) {
    //     let node = new TreeNode(array[i], 0)
    //     tree.push(node)
    // }
    // 先把父节点放入tree中
    tree.push(new TreeNode(array[0],1))
    let index = 1
    let height = 1
    while(index < array.length) {
        let tIndex = tree.length - 1
        let node = new TreeNode(array[index],tree[tIndex].height + 1)
        if(tree[tIndex].value - 500 > node.value) {
            buildNode(tree[tIndex], 'left', node)
        } else 
        if(tree[tIndex].value + 500 <  node.value) {
            buildNode(tree[tIndex], 'right', node)
        } else {
            buildNode(tree[tIndex], 'middle', node)
        }
        index++
    }

    function buildNode(tree, type, node){
        // tree 相等于 treeIndex
        if(tree[type]) {
            // tree[type][type] = node
            node.height = tree[type].height+1
            buildNode(tree[type], type, node, height+1)
        } else {
            height = Math.max(height, node.height)
            tree[type] = node
        }
    }
    // console.log(tree, 'tree000')
    return height
}

console.log(solution([5000, 2000, 5000, 8000, 1800]))
console.log(solution([5000, 4000, 4000]))

console.log(solution([5000, 2000, 5000, 8000, 1800, 7500, 4500, 1400, 8100]))

console.log(solution([5000]))