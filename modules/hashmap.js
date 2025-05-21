import { LinkedList } from "./linked-list.js";

export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadfactor = 0.75;
    this.buckets = this.createBuckets(this.capacity);
  }

  hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % 16;
    }

    return hashCode;
  } 

  createBuckets(size) {
    let buckets = [];
    for (let i = 0; i < size; i++) {
      let bucket = new LinkedList();
      buckets.push(bucket);
    }

    return buckets;
  }
}

