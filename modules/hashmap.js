import { LinkedList } from "./linked-list.js";

export class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadfactor = 0.75;
    this.buckets = this.createBuckets(this.capacity);
    this.entryCount = 0;
  }

  hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
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

  getBucket(key) {
    let hashCode = this.hash(key);
    return this.buckets[hashCode];
  }

  set(key, value) {
    let bucket = this.getBucket(key);
    if (bucket.contains(key)) {
      bucket.replace(key, value);
    } else {
      bucket.append(key, value);
      this.entryCount++;
    }

    if (this.entryCount > (this.capacity * this.loadfactor)) {
      this.growBuckets();
    }
  }

  get(key) {
    let bucket = this.getBucket(key);
    let entry = bucket.head;

    while (entry !== null) {
      if (entry.key === key) return entry.value;
      entry = entry.next;
    }

    return null;
  }

  has(key) {
    let bucket = this.getBucket(key);
    let entry = bucket.head;

    while (entry !== null) {
      if (entry.key === key) return true;
      entry = entry.next;
    }
    

    return false;
  }

  remove(key) {
    let bucket = this.getBucket(key);
    let removedEntry = bucket.remove(key);

    if (removedEntry !== null) {
      this.entryCount--;
      return true;
    } 

    return false;
  }

  growBuckets() {
    this.capacity *= 2;
    let newBucket = this.createBuckets(this.capacity);
    for (let bucket of this.buckets) {
      let node = bucket.head;

      if (node === null) continue;

      while (node !== null) {
        let hashCode = this.hash(node.key);
        newBucket[hashCode].append(node.key, node.value);
        node = node.next;
      }
    }

    this.buckets = newBucket;
  }

  length() {
    return this.entryCount;
  }

  clear() {
    this.buckets = this.createBuckets(this.capacity);
    this.entryCount = 0;
  }

  keys() {
    let keysArray = [];

    for (let bucket of this.buckets) {
      let entry = bucket.head;

      if (entry === null) continue;

      while (entry !== null) {
        keysArray.push(entry.key);
        entry = entry.next;
      }
    }

    return keysArray;
  }
}

