/*
 * @Author: wanghh
 * @Date: 2023-12-27 08:23:10
 * @LastEditors: wanghh
 * @LastEditTime: 2023-12-27 15:30:19
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
      const path = queue.shift(); // 取出一个元素
      const currentStatusTemp = path[path.length - 1];
      // 1. 输出path 可能是没有相对应的路径
      if (currentStatusTemp === traget) {
        return path;
      }
      // 2 判断能不能到达 path只有一个节点 也有是可能是自己倒自己 主要注意区分一下
      //   if (currentStatusTemp === value && tempArr.includes(value)) {
      //     return path;
      //   }
      if (!visited.has(currentStatusTemp)) {
        visited.add(currentStatusTemp);
        for (const nextStatus of stateMap[currentStatusTemp]) {
          queue.push([...path, nextStatus]);
        }
      }
    }
    return [];
  }
}

let stateMap = {
  A: ["A", "B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F", "G"],
  D: ["B"],
  E: ["B", "H"],
  F: ["C"],
  G: ["C"],
  H: ["E"],
};

console.log(recursionRelation("A", "H"));
console.log(recursionRelation("A", "A"));
