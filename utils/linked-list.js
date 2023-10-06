class ListNode {
  constructor(head = null) {
    this.head = head;
  }

  /** 取得長度 */
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  /** 清空 */
  clear() {
    this.head = null;
  }

  /** 取得最後一個 */
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  /** 取得 head */
  getFirst() {
    return this.head;
  }
}

module.exports = ListNode;
