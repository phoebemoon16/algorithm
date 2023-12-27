/*
 * @Author: wanghh
 * @Date: 2023-12-27 08:23:10
 * @LastEditors: wanghh
 * @LastEditTime: 2023-12-27 16:01:48
 * @Description: 根据映射图去查找最小路径
 */
/**广度优先 */
function recursionRelation(source, traget) {
  const queue = [[source]];
  const visited = new Set();
  if (source === "") {
    return ["", traget];
  } else {
    while (queue.length > 0) {
      /** 先进先出
       * queue.push()
       * queue.shift()
       */
      console.log(queue, "path00");
      const path = queue.shift(); // 取出队列的第一个数组元素
      const currentStatusTemp = path[path.length - 1]; // 取出最后一个元素 就是上一个push的邻居节点
      // 1. 输出path 可能是没有相对应的路径自己倒自己有点问题
      //   if (currentStatusTemp === traget) {
      //     return path;
      //   }
      // 2 判断能不能到达 path只有一个节点 也有是可能是自己倒自己 主要注意区分一下
      console.log(path, "path11");
      const tempArr = path.slice(1);
      if (currentStatusTemp === traget && tempArr.includes(traget)) {
        return path;
      }
      if (!visited.has(currentStatusTemp)) {
        visited.add(currentStatusTemp);
        for (const nextStatus of stateMap[currentStatusTemp]) {
          console.log(nextStatus, "nextStatus");
          queue.push([...path, nextStatus]); // 当前路径加上邻居节点 分别push进去
        }
      }
    }
    return [];
  }
}

let stateMap = {
  A: ["C", "D"],
  B: ["B", "D"],
  C: ["B"],
  D: ["C", "A"],
};

console.log(recursionRelation("D", "D"));
console.log(recursionRelation("A", "A"));
