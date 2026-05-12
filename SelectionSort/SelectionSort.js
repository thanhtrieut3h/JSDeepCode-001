export function selectionSort(arr = []){
    const sorted = [...arr];
    const n = sorted.length;
    console.log("Mang ban dau chua sap xep : ", sorted);
    console.log("========================");
    for(let i = 0; i < n - 1; i++){
        
        let minIndex = i;
        // tim phan tu nho nhat
        for(let j = i + 1; j < n; j++){
            if(sorted[j] < sorted[minIndex]){
                minIndex = j;
            }
        }
        // hoan doi(phan tu min) dua ve vi tri dung (vi tri dau mang)
        if(minIndex !== i){
            // mang ko can hoan doi thi thoi(vi mang truyen vao co the da dc sap xep san)
            console.log(`\nLan lap thu ${i+1} : Tim thay ${sorted[minIndex]} nho hon ${sorted[i]}`);
            // hoan vi(swap)
            [sorted[i], sorted[minIndex]] = [sorted[minIndex], sorted[i]];
            console.log(` => hoan doi [${sorted.join(", ")}]`);
        } else {
            console.log(`lan lap thu ${i+1}: ${sorted[i]} da dung vi tri khong can hoan doi`);
        }
    }
    console.log("============================");
    console.log("Mang sau khi da duoc sap xep : ", sorted);
    return sorted;
}