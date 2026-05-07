import { helperQueue } from './Queue.js';

// bai tap demo : xu ly cac Request theo danh sach doi
function handleRequest(requests, timeSlice){
    // request : la cac yeu cau (co san cac thoi gian xu ly)
    // timeSlice : thoi gian xu ly cac yeu cau
    // co nhieu cac Requets khac nhau - xu ly theo hang doi(Queue)
    const queue = [...requests]; // lay tat cac requests gui den
    let currentTime = 0;
    console.log("Bat dau xu ly cac request ...");
    while(!helperQueue.isEmpty(queue)){
        const req = helperQueue.dequeue(queue); // lay ra request dau tien di vao trong hang doi
        const processTime = Math.min(req.duration, timeSlice);
        console.log(`Thoi diem ${currentTime} xu ly : ${req.name}`);
        req.duration -= processTime; // req.duration = req.duration - processTime;
        currentTime += processTime; // currentTime = currentTime + processTime;
        if(req.duration > 0){
            console.log(`${req.name} con ${req.duration}s, dua lai vao hang doi de tiep tuc xu ly`);
            helperQueue.enqueue(queue, req);
        } else {
            console.log(`${req.name} da da xy ly xong(hoan thanh)`);
        }
        console.log(`Hang doi : ${queue.map(r => r.name).join(", ") || " Rong "}\n`);
    }
    console.log(`Tat ca cac requets da xu ly xong sau ${currentTime}s`)
}
const requests = [
    {name: "Task A", duration: 5},
    {name: "Task B", duration: 3},
    {name: "Task C", duration: 4},
];
handleRequest(requests, 2);