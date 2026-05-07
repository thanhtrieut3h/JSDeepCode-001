// trien khai array bang Queue : bien mot mang thanh Queue
let queue = [];

// thêm phần tử vào cuối Queue.
export function enqueue(queue, element){
    queue.push(element);
    return queue;
}
// xoa phan tu o dau hang doi
export function dequeue(queue){
    if(isEmpty(queue)){
        return null;
    }
    return queue.shift();
}
export function isEmpty(queue){
    return queue.length === 0;
}
// xoa phan tu cuoi hang doi - tra ve phan tu do
export function rear(queue){
    if(isEmpty(queue)){
        return null;
    }
    return queue[queue.length - 1];
}
// lay ra kich thuoc cua Queue
export function size(queue){
    return queue.length;
}
// xem phan tu dau tien cua Queue - khong can xoa
export function front(queue){
    if(isEmpty(queue)){
        return null;
    }
    return queue[0];
}
export function printQueue(queue){
    if(isEmpty(queue)){
        return null;
    }
    console.log("Queue (dau -> cuoi) : ", queue.join(" <-- "));
    console.log("phan tu dau Queue : " , front(queue));
    console.log("phan tu cuoi Queue : ", rear(queue));
}

export const helperQueue = {
    dequeue,
    enqueue,
    rear,
    front,
    printQueue,
    size,
    isEmpty
}