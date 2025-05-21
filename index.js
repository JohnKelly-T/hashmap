import { HashMap } from "./modules/hashmap.js";

let test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log("\n===========================================================");
console.log("==                     Populate Hash Map                 ==");
console.log("===========================================================\n");

console.dir(test.buckets,{ depth: null });

console.log("\n===========================================================");
console.log("==                Check load and capacity                ==");
console.log("===========================================================\n");

console.log("Capacity: ", test.capacity);
console.log("Load Level: ", test.capacity * test.loadfactor);

console.log("\n===========================================================");
console.log("==               Test overwriting of nodes               ==");
console.log("===========================================================\n");

test.set('lion', 'white');
test.set('hat', 'beige');

console.log("Length: ", test.length());
console.log("Capacity: ", test.capacity);
console.log("Load Level: ", test.capacity * test.loadfactor);

console.dir(test.buckets,{ depth: null });

console.log("\n===========================================================");
console.log("==      Populate with new node and see buckets grow      ==");
console.log("===========================================================\n");

test.set('moon', 'silver');

console.log("Length: ", test.length());
console.log("Capacity: ", test.capacity);
console.log("Load Level: ", test.capacity * test.loadfactor);

console.dir(test.buckets,{ depth: null });

console.log("\n===========================================================");
console.log("==                 Test overwriting again                ==");
console.log("===========================================================\n");

test.set('moon', 'lightgray');
test.set('dog', 'polka dot');

console.dir(test.buckets,{ depth: null });

console.log("\n===========================================================");
console.log("==                    Test get method                    ==");
console.log("===========================================================\n");

console.log("Get 'moon': ", test.get('moon'));
console.log("Get 'kite': ", test.get('kite'));
console.log("Get 'apple': ", test.get('apple'));
console.log("Get 'carrot': ", test.get('carrot'));

console.log("\n===========================================================");
console.log("==                    Test has method                    ==");
console.log("===========================================================\n");

console.log("Has 'dog': ", test.has('dog'));
console.log("Has 'gorilla': ", test.has('gorilla'));
console.log("Has 'dragon': ", test.has('dragon'));
console.log("Has 'banana': ", test.has('banana'));

console.log("\n===========================================================");
console.log("==                   Test remove method                  ==");
console.log("===========================================================\n");

console.log("Remove 'dog': ", test.remove('dog'));
console.log("Remove 'cat': ", test.remove('cat'));

console.dir(test.buckets,{ depth: null });

console.log("\n===========================================================");
console.log("==                    Test keys method                   ==");
console.log("===========================================================\n");

console.log(test.keys());

console.log("\n===========================================================");
console.log("==                   Test values method                  ==");
console.log("===========================================================\n");

console.log(test.values());

console.log("\n===========================================================");
console.log("==                  Test entries method                  ==");
console.log("===========================================================\n");

console.log(test.entries());