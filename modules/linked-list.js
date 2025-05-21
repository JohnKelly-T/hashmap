import { Node } from "./node.js";

export class LinkedList {
  constructor () {
    this.head = null;
  }

  
  append(key, value) {
    let node = new Node();
    node.key = key;
    node.value = value;

    if (this.head === null) {
      this.head = node;
      return;
    }

    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = node;
  }
}