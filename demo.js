
// import MyHello  from "./unit04.js";
// import { test, PI } from "./unit04.js";
// test();
// console.log(PI);
// MyHello();

function test01(){
    console.log("Test 01");
}
function tets02(callback){
    if(typeof callback !== "function") {
        return;
    }
    setTimeout(() => {
        console.log("Test 02");
        callback(); // thuc thi ham callback
    }, 0);
}
function test03(){
    console.log("ket thuc chuong trinh");
}
test01();
tets02(test03);

// su dung promise de xu ly tac vu bat dong bo
const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        if(1 + 1 == 2){
            res("Da xu ly xong tac vu bat dong bo");
        } else {
            rej("Co loi xay ra");
        }
    }, 10)
});
// lay ket qua tu promise
// .then : lay ket qua tu resolve
// .catch : lay ket qua tu reject
promise1.then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});
