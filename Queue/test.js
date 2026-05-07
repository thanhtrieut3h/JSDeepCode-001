import { helperQueue, printQueue } from "./Queue.js";

let myQueue = [];
helperQueue.enqueue(myQueue, 10);
helperQueue.enqueue(myQueue, 20);
helperQueue.enqueue(myQueue, 30);
helperQueue.enqueue(myQueue, 40);
helperQueue.enqueue(myQueue, 50);
helperQueue.printQueue(myQueue);

let first = helperQueue.front(myQueue); // phan tu dau tien cua queue
let last = helperQueue.rear(myQueue); // phan tu cuoi cung cua queue
console.log("front : ", first);
console.log("rear : ", last);

let size = helperQueue.size(myQueue);
console.log("Size of Queue : ", size);

helperQueue.dequeue(myQueue); // dung dau tien trong queue
printQueue(myQueue);
