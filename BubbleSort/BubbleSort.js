// ap dung thuat toan sap xep noi bot - sap xep mang trong JS
export function bubbleSort(arr = [], type = "asc"){
    // nhan vao tham so la mot mang ngau nhien(chua dc sap xep theo mot trat tu nao ca)
    // tra ve mot mang moi da duoc sap xep theo thu tu, khong lam anh huong toi mang ban dau duoc truyen vao
    const sortedArray = [...arr]; // copy mang truyen sang mot mang moi(khong can biet mang tham so co bao nhieu phan, copy dc day du)
    const n = sortedArray.length; // lay ra so luong phan tu cua mang
    console.log("Mang ban dau : ", sortedArray); // chua dc sap xep
    console.log("===============================");
    let check = type === "asc" ? true : (type === "desc" ? false : true);

    for(let i = 0; i < n - 1; i++){
        console.log(`\nLan lap thu ${i+1}`);
        for(let j = 0; j < n - 1 - i; j++){
            // swap - hoan vi
            if(check){
                if(sortedArray[j] > sortedArray[j+1]){
                    [sortedArray[j], sortedArray[j+1]] = [sortedArray[j+1], sortedArray[j]];
                    console.log(`Doi vi tri ${sortedArray[j+1]} va ${sortedArray[j]} -> [${sortedArray.join(", ")}]`);
                } else {
                    console.log(`${sortedArray[j]} <= ${sortedArray[j+1]}, giu nguyen`);
                }
            } else {
                if(sortedArray[j] < sortedArray[j+1]){
                    [sortedArray[j], sortedArray[j+1]] = [sortedArray[j+1], sortedArray[j]];
                    console.log(`Doi vi tri ${sortedArray[j+1]} va ${sortedArray[j]} -> [${sortedArray.join(", ")}]`);
                } else {
                    console.log(`${sortedArray[j]} <= ${sortedArray[j+1]}, giu nguyen`);
                }
            }
            
        }
        console.log(`Ket thuc vong lap thu ${i+1} : [${sortedArray.join(", ")}]`);
    }
    console.log("\n=============================");
    console.log("mang sau khi duoc sap xep la : ", sortedArray);
    return sortedArray;
}