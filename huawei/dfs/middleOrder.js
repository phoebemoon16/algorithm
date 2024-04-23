/**
 * 二叉树的中序遍历
 * 
 * 输入：root = [1,null,2,3]
输出：[1,3,2]

前： 根 左 右
后： 左 右 根
中： 左 根 右
 */

class TreeNode{
    constructor(value, left=0, right = 0){
        this.value = value
        this.left = left
        this.right = right
    }
}


//  将此数组转换为二叉树 记得for循环加2
function buildTreeFromArray(arr) {
    if (arr.length === 0) return null;

    const queue = [];
    const root = new TreeNode(arr[0]);
    queue.push(root);

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

function solution(root){
    let nodes =buildTreeFromArray(root)
    let res = []
    function inorder(node){
        if(!node) return
        inorder(node.left)
        res.push(node.value)
        inorder(node.right)
    }
    inorder(nodes)
    return res
}
console.log(solution([1,null,2,3]))