import Stack from "./Stack.js";

let myStack = [];
Stack.push(myStack, 10);
Stack.push(myStack, 20);
Stack.push(myStack, 30);
Stack.push(myStack, 40);
Stack.push(myStack, 50);
Stack.printStack(myStack);
let top = Stack.peek(myStack);
console.log("Phan tu dinh cua stack la ", top);
console.log("Xoa phan tu dinh cua stack");
Stack.pop(myStack);
Stack.printStack(myStack);