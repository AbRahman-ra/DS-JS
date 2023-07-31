class Node {
  constructor(v) {
    this.value = v;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
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
    let removedNode = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  // Shift
  shift() {
    if (this.length <= 1) return this.pop();
    let result = this.head;
    this.head = this.head.next;
    this.head.prev = null;
    result.next = null;
    this.length--;
    return result;
  }

  // Unshift
  unshift(v) {
    if (this.length === 0) return this.push(v);
    let newHead = new Node(v);
    newHead.next = this.head;
    this.head.prev = newHead;
    this.head = newHead;
    this.length++;
    return this;
  }

  // Get
  get(i) {
    // i is zero indexed, to make it 1 indexed, remove the `=` from the condition
    if (i >= this.length) return console.error("Value exceeds list boundary");
    let current;
    if (i < this.length / 2) {
      current = this.head;
      for (let c = 0; c < i; c++) current = current.next;
    } else {
      current = this.tail;
      for (let c = this.length - 1; c > i; c--) current = current.prev;
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
    newNode.next = behind.next;
    newNode.prev = behind;
    behind.next.prev = newNode;
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
    behindRemoved.next.next.prev = behindRemoved;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }

  // Reverse
  reverse() {
    let current = this.tail;
    let previous = current.prev;
    let next = null;
    while (previous) {
      previous = current.prev;
      [current.prev, current.next] = [current.next, current.prev];
      current = previous;
    }
    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }
}

let dll = new DoublyLinkedList();
dll.push(0);
dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);
dll.push(6);
console.log(dll.insert(4, 3.5));
console.log(dll.reverse());
console.log(dll);
