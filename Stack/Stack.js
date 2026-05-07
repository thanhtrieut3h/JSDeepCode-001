// gia lap Stack bang Array trong JS
let stack = [];

// Them phan tu vao ngan xep
export function pushStack(stack, element){
    stack.push(element);
    return stack;
}
// lay va xoa phan tu o dinh cua ngan xep
export function popStack(stack){
    if(isEmpty(stack)){
        return null;
    }
    return stack.pop();
}
// xem phan tu o dinh ngan xep(khong xoa khoi ngan xep)
export function peek(stack){
    if(isEmpty(stack)){
        return null;
    }
    return stack[stack.length - 1];
}
export function isEmpty(stack){
    return stack.length === 0;
}
export function size(stack){
    return stack.length;
}
// xoa tat ca cac phan tu khoi stack
export function clear(stack){
    stack.length = 0;
    return stack;
}
// duyet stack
export function printStack(stack){
    if(isEmpty(stack)){
        console.log("Stack is empty");
        return null;
    }
    console.log("Stack (tu day len tren dinh)", stack.join(" --> "));
    console.log("Dinh cua Stack la : ", peek(stack));
}
const helperStack = {
    push : pushStack,
    pop: popStack,
    peek,
    isEmpty,
    printStack,
    clear,
    size
}
export default helperStack;
