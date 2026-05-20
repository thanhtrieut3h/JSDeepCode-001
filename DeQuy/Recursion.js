// bai 1 : tinh giai thua cua mot so nguyen
// n! = (n-1)! * n;
// 4! = 3! * 4
// 1! = 0! = 1;
function tinhGT(n){
    let gt = 1;
    for(let i = 1; i <= n; i++){
        gt *= i;
    }
    return gt;
}
function gtDeQuy(n){
    // b1 : khu de quy
    if(n === 0){
        return 1;
    }
    // b2: goi de quy
    return n * gtDeQuy(n - 1);
    // chi nen ap dung de quy khi xac dinh cong thuc tong quat cua bai toan
}
console.log(gtDeQuy(5));

// tinh tong cac so tu 1 den N
// CT tong quat - truong hop khu de quy
// xu ly day fibonaci
// tim USCLN - thuat toan Oclit
// ap dung de quy tim so nhi phan cua 1 so thap phan
// de quy : tim so Max, Min trong mang

