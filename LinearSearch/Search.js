export function linearSearch(arr, target){
    console.log(`Tim kiem gia tri : ${target} trong ${arr}`);
    console.log("======================================");

    let n = arr.length;
    for(let i = 0; i < n; i++){
        console.log(`Buoc thu ${i + 1} kiem tra phan tu tai vi tri ${i} = ${arr[i]}`);
        if(arr[i] === target){
            console.log(`Tim thay ${target} tai vi tri ${i}`);
            return i;
        } else {
            console.log(`${arr[i] !== target}, tiep tuc tim kiem ...`);
        }
    }
    console.log(`Khong tim thay ${target} trong ${arr}`);
    return -1;
}

export function linearSearchV2(arr, target){

}