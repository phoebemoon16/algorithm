/*
 * @Author: wanghh
 * @Date: 2024-04-30 11:13:29
 * @LastEditors: wanghh
 * @LastEditTime: 2024-05-13 14:32:39
 * @Description:
 */
/** 链表
 * 构造链表 并删除链表上倒数第N个节点
 *
 * 1. 先构造链表 （类似于树节点）
 */

class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//  自己做法 输出的也是个链表
function solution(head, n) {
  const listHead = new ListNode(head[0]);
  let current = listHead;
  let i = 1;
  while (i < head.length) {
    let newNode;
    //  删除第n个节点 直接将第n+1个节点push上去
    if (i === head.length - n) {
      newNode = new ListNode(head[i + 1]);
      i += 2;
    } else {
      newNode = new ListNode(head[i]);
      i++;
    }
    current.next = newNode;
    current = current.next;
  }
  // listHead.next 再将链表进行一个输出 按照数组
  // let currentNode = listHead
  // let result = []
  // while(currentNode) {
  //     result.push(currentNode.value)
  //     currentNode = currentNode.next
  // }
  return listHead.next;
}
console.log(solution([1, 2, 3, 4, 5], 2));

// letcode 做法 他有自己的链表 所以不需要自己构造链表
var removeNthFromEnd = function (head, n) {
  // 先求出链表的长度 不像数组 直接可求length
  let size = 0;
  let p = head;
  while (p) {
    p = p.next;
    size++;
  }
  // 构造链表 其第二个节点就是head的头节点
  let dummy = new ListNode(-1);
  //赋值pre节点等于头节点
  let pre = dummy;
  //pre节点指向dummy
  pre.next = head;
  // 从开始到倒数n个节点 可以一直next 取下个节点 直到倒数N个可以取 下一个的next
  while (size - n) {
    pre = pre.next;
    size--;
  }
  if (pre.next.next) {
    pre.next = pre.next.next;
  } else {
    pre.next = null;
  }
  return dummy.next;
};

/** 队列操作
 * head 取出第一个非空成员
 * last 取出有限队列的最后一个非空成员
 * tail: 取出除了队列头以外的其他非空成员
 * init: 取出除了队列尾以外的其他非空成员
 */
