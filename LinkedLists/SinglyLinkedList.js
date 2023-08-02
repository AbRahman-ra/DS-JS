// Node Class
class Node {
  constructor(v) {
    this.value = v;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  static resetLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Push
  push(v) {
    let newNode = new Node(v);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  // Pop
  pop() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      let result = this.head;
      this.resetLinkedList();
      return result;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.next) current = current.next;
      else break;
    }
    let result = current.next;
    this.tail = current;
    current.next = null;
    this.length--;
    return result;
  }

  // Shift
  shift() {
    if (this.length <= 1) return this.pop();
    let result = this.head;
    this.head = this.head.next;
    result.next = null;
    this.length--;
    return result;
  }

  // Unshift
  unshift(v) {
    if (this.length === 0) return this.push(v);
    let newHead = new Node(v);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this;
  }

  // Get
  get(i) {
    // i is zero indexed, to make it 1 indexed, remove the `=` from the condition
    if (i >= this.length) return console.error("Value exceeds list boundary");
    let c = 0,
      current = this.head;
    while (c < i) {
      current = current.next;
      c++;
    }
    return current;
  }

  // Set
  set(i, v) {
    this.get(i).value = v;
    return true;
  }

  // Insert
  insert(i, v) {
    if (i === 0) return this.unshift(v);
    if (i === this.length) return this.push(v);
    if (i > this.length) return;
    let newNode = new Node(v);
    let behind = this.get(i - 1);
    newNode.next = behind.next.next;
    behind.next = newNode;
    this.length++;
    return this;
  }

  // Remove
  remove(i) {
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();
    let behindRemoved = this.get(i - 1);
    let removed = behindRemoved.next;
    behindRemoved.next = behindRemoved.next.next;
    removed.next = null;
    this.length--;
    return removed;
  }

  // Reverse
  reverse() {
    let previous = null;
    let current = this.head;
    let next = this.head;
    while (next) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }
}

module.exports = { Node };
