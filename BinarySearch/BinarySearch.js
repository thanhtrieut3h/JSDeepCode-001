function binarySearch(arr, target){
    // bieu dien tim kiem tren mang trong JS: arr
    // target: gia tri can tim trong mang
    let left = 0; // vi tri ben trai ngoai cung cua mang
    let right = arr.length - 1; // vi ben phai trong cung cua mang
    let step = 0; // cac buoc thuc thi thuat toan 
    console.log(`Tim kiem gia tri ${target}`);
    console.log(`Mang da duoc sap xep : [${arr.join(", ")}]`); // join : chuyen mang ve chuoi
    console.log(`=====================================`);
    while(left <= right){
        step++;
        // tinh vi tri trung gian(o giua mang)
        const middle = Math.floor((left + right) / 2);
        console.log(`\n Buoc xu ly thu ${step}`);
        console.log(`khoang tim kiem : [${left} ... ${right}]`);
        console.log(`Phan tu o giua (o vi tri ${middle}): ${arr[middle]}`);
        if(arr[middle] === target){
            console.log(`Tim thay phan tu ${target} o vi tri ${middle}`);
            return middle;
        } else if(arr[middle] < target){
            // lay phia phai
            console.log(`${arr[middle]} < ${target} tim ben phia ben phai cua ${arr[middle]}`);
            left = middle + 1; // left se duoc tinh lai 
        } else {
            // lay phia ben trai
            console.log(`${arr[middle]} > ${target} tim ben phia ben trai cua ${arr[middle]}`);
            right = middle - 1;
        }
    }
    console.log(`Khong tim thay ${target} trong mang`);
    return -1;
}

const mySearch = {
    binarySearch
}
export default mySearch;