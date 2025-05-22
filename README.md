# JavaScript Hashmap Implementation

This project is a hands-on implementation of a Hashmap data structure in JavaScript, following the curriculum of The Odin Project. It provides a fundamental understanding of how hashmaps work internally, including key-value storage, hashing functions, collision resolution, and dynamic resizing.

## Features

* **Key-Value Storage:** Efficiently stores and retrieves data using unique keys.
* **Hashing Function:** A custom hashing function to convert keys into array indices.
* **Collision Resolution:** Handles collisions using separate chaining (using linked lists) for robust data storage.
* **Dynamic Resizing:** Automatically expands or shrinks the underlying array as needed to maintain efficiency (load factor management).
* **Core Hashmap Operations:**
    * `hash(key)`: Returns an integer index within the buckets array's bounds.
    * `set(key, value)`: Adds a new key-value pair or updates an existing one.
    * `get(key)`: Retrieves the value associated with a given key.
    * `has(key)`: Checks if a key exists in the hashmap.
    * `remove(key)`: Deletes a key-value pair from the hashmap.
    * `length()`: Returns the number of stored key-value pairs.
    * `clear()`: Removes all entries from the hashmap.
    * `keys()`: Returns an array containing all keys.
    * `values()`: Returns an array containing all values.
    * `entries()`: Returns an array of all key-value pairs.

## How it Works

The hashmap implementation uses an underlying array (often called "buckets" or "slots") to store data. When a key-value pair is added:

1.  **Hashing:** The key is passed through a hashing function, which converts it into an integer index within the array's bounds.
2.  **Collision Handling:** If multiple keys hash to the same index (a collision), separate chaining is employed. This means each array index can hold a "chain" (e.g., a linked list or another array) of key-value pairs that hash to that index.
3.  **Storage:** The key-value pair is then stored within the appropriate chain at the calculated index.

For retrieval, the same hashing process is used to find the correct index, and then the chain at that index is traversed to find the desired key.

Dynamic resizing ensures that the hashmap maintains an optimal "load factor" (the ratio of stored items to the number of buckets). When the load factor exceeds a certain threshold, the underlying array is resized, and all existing entries are rehashed and redistributed to maintain efficiency.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (for running JavaScript outside a browser environment)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone git@github.com:JohnKelly-T/hashmap.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd hashmap
    ```

### Usage

You can interact with the hashmap implementation by importing and instantiating it in your JavaScript files.

**Example:**

```javascript
import { HashMap } from "./modules/hashmap.js"; 

let myHashMap = new HashMap();

myHashMap.set('name', 'Alice');
myHashMap.set('age', 30);
myHashMap.set('city', 'New York');

console.log(myHashMap.get('name')); // Output: Alice
console.log(myHashMap.has('age'));  // Output: true
console.log(myHashMap.length());    // Output: 3

myHashMap.remove('age');
console.log(myHashMap.length());    // Output: 2

console.log(myHashMap.keys());    // Output: ['name', 'city']
console.log(myHashMap.values());  // Output: ['Alice', 'New York']
console.log(myHashMap.entries()); // Output: [['name', 'Alice'], ['city', 'New York']]

myHashMap.clear();
console.log(myHashMap.length());    // Output: 0
```

Run the script using 

```bash
node index.js
```
