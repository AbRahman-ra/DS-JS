/*
Again, the queue is similar to stack.
It can be an array or a linked list
To achieve the best performance (O(1) insertion & O(1) removal)
We'll use a Doubly Linked List
*/

const { Node } = require("../LinkedLists/DoublyLinkedList");

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Reset Queue
  resetQueue() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Enqueue
  enqueue(v) {
    let newFirst = new Node(v);
    if (!this.length) this.last = newFirst;
    else {
      newFirst.next = this.first;
      this.first.prev = newFirst;
    }
    this.first = newFirst;
    this.length++;
    return this;
  }

  // Dequeue
  dequeue() {
    let oldLast = this.last;
    if (this.length <= 1) {
      this.resetQueue();
      return oldLast;
    }
    this.last = this.last.prev;
    this.last.next = null;
    oldLast.prev = null;
    this.length--;
    return oldLast;
  }
}
