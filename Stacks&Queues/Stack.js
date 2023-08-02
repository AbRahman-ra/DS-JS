// Stack can be implemented using array or linked list

/* Array is simple
let stack = [];
stack.push(value)
stack.pop(value)
*/

// Linked List Implementation

const { Node } = require("../LinkedLists/SinglyLinkedList");

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Reset Stack
  resetStack() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Push
  push(v) {
    let newLast = new Node(v);
    if (!this.length) this.bottom = newLast;
    else newLast.next = this.top;
    this.top = newLast;
    this.length++;
    return this;
  }

  // Pop
  pop() {
    if (!this.length) return null;
    let poppedHead = this.top;
    if (this.length === 1) {
      this.resetStack();
      return poppedHead;
    }
    this.top = this.top.next;
    poppedHead.next = null;
    this.length--;
    return poppedHead;
  }
}
