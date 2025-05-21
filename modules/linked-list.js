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

  remove(key) {
    let curr = this.head;
    let prev = this.head;

    if (curr.key === key) {
      this.head = curr.next;
      return;
    }

    while (curr !== null) {
      if (curr.key === key) break;
      prev = curr;
      curr = curr.next;
    }

    if (curr !== null) {
      prev.next = curr.next;
    } 

    return curr;
  }

  contains(key) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.key === key) return true;
      curr = curr.next;
    }

    return false;
  }
}