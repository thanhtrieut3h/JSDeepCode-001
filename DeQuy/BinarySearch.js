// Recursion: De Quy
// hinh thuc de nhan biet: goi lai chinh ham do trong ham cua no
/*
function Test(){
    Test(); // goi de quy
}
*/
// khi ap dung thuat toan de quy: can phai biet ky thuat khu de quy - biet khi nao dung xu ly de quy
// ban chat de quy: giong nhu xu ly cac vong lap

function binarySearchRecursion(arr, target, left = 0, right = arr.length -1){
    // b1 : khu de quy - biet khi nao dung
    if(left > right){
        return -1;
    }
    // tim phan tu o giua
    const mid = Math.floor((left + right) / 2);
    if(arr[mid] === target){
        return mid;
    }
    if(arr[mid] < target){
        // tim ben phai so voi gia tri tai mid
        // goi de quy (recursion)
        return binarySearchRecursion(arr, target, mid + 1, right);
    }
    // tim kiem ben trai so voi gia tri tai mid
    // goi de quy
    return binarySearchRecursion(arr, target, left, mid - 1);
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
const value = 8;
const result = binarySearchRecursion(numbers, value, 0, numbers.length - 1);
if(result === -1){
    console.log(`${value} khong co trong mang [${numbers.join(", ")}]`);
} else {
    console.log(`${value} co o vi tri so ${result} trong mang [${numbers.join(", ")}]`);
}
