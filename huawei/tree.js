/**
 * 
 * 题目描述
给定长度为n的无序的数字数组，每个数字代表二叉树的叶子节点的权值，数字数组的值均大于等于1。
请完成一个函数，根据输入的数字数组，生成哈夫曼树，并将哈夫曼树按照中序遍历输出。
为了保证输出的二叉树中序遍历结果统一，增加以下限制:
二叉树节点中，左节点权值小于等于右节点权值，根节点权值为左右节点权值之和。
当左右节点权值相同时，左子树高度高度小于等于右子树。
注意:所有用例保证有效，并能生成哈曼树提醒:哈夫曼树又称最优二叉树，是一种带权路径长度最短的一叉树。
所谓树的带权路径长度，就是树中所有的叶结点的权值乘上其到根结点的路径长度
(若根结点为0层，叶结点到根结点的路径长度为叶结点的层数)
输入描述:
第一行为一个数n,代表数组中元素个数
第二行为无序的数字数组，元素之间以空格隔开

输出描述:
输出一个哈夫曼的中序遍历数组，数值间以空格分隔

思路： 哈夫曼树： 带权路径最小的树
1.排序 最小的2个节点为最高权（放在最下面。且最小的放左边）
2.2个节点的值相同则 树高度最小的放左边， 左侧树小于右侧树
3.直到为最后一棵树停止此操作，
4.中序遍历输出 先左 再中 后右
前： 根 左 右
后： 左 右 根
中： 左 根 右
 */

// 中序遍历 左 根 右 队列先进先出
function inorderFun(array){
    let result = []
    function traverse(node){
        if(node === null) {
            return
        }
        // console.log(node, node.left,'node0000')
        // 先遍历左子树
        if (node.left) {
            traverse(node.left);
        }
        // 将当前节点的值加入结果数组
        result.push(node.value);
        // 再遍历右子树
        if (node.right) {
            traverse(node.right);
        }
    }
    traverse(array[0]);
    return result
}


class Node{
    constructor(left, right, weight, value){
        this.left = left
        this.right = right
        this.weight = weight
        this.value = value
    }
}

function sort(array) {
    return array.sort((a,b) => a.value - b.value)
}
/**
 * 根据数组构建哈夫曼树
 * 先排序
 * 每一个元素 设置第一个对象 {left,right,weight,height}
 *  */ 
function buildTree(arr){
 arr = arr.sort((a,b) => a-b)
 let nodes = []
 for(let value of arr) {
    nodes.push(new Node(null, null, 0, value))
 }

 while(nodes.length > 1) {
    let left = nodes.shift()
    let right = nodes.shift()
    // 左节点的值小于右节点
    // 当左右节点权值相同时，左子树高度高度小于等于右子树。
    if((left.value === right.value && left.weight > right.weight) || left.value > right.value) {
        [left, right] = [right, left]
    }
    let fa_weight = right.weight + 1
    let parent = new Node(left, right, fa_weight, left.value+right.value)
    // console.log(left, right, parent, 'build==========')
    nodes.unshift(parent)
    // 每次求得父节点记得排序 可以使下次总是取的前面2个最小值
    nodes = sort(nodes)
    // console.log(nodes, 'nodes00000')
 }
 return nodes
}

console.log(inorderFun(buildTree([5,15,30,40,10])), 'finally')

console.log(inorderFun(buildTree([5,10,12,20,13])), 'finally')