"use strict";

// tim hieu ve function trong js
// 1- function declaration
// 2- function expresstion
// 3- arrow funciton

//function declaration
let res = sum(10);
//console.log(res);
let d = 101; // bien toan cuc
let s1 = 10;
let s2 = 20
function sum(a, b = 0){

    let c = 100; // bien cuc bo
    return a + b;
    //let c = a - b; // ko chay
}
//let t = add(s1, s2);
//console.log(t);
// function expresstion
let add = function(c, d){
    return c  + d;
}
let x = 5;
if( x = 6){

    function test(){
        console.log("test");
    }
} else {

    function test(){
        console.log("test");
    }
}

let u = 10;
function check(){
    let u = 20;
    if(u == 20){
        let u = 30;
        console.log(u); // ? 30
    }
    console.log(u); // ? 20
}
check();
console.log(u); // ? 10

let substract = (a, b) => a - b; // arrow function
function substract4(a, b){
    return  a - b;
}
let substract2 = (a, b, c) => {
    let r = a- b-c;
    return r;
}
// out, ref
// &
let p = substract2(1,3,4);
// viet kiem tra so nguyen to bang arrow fuction
// Array trong JS
let myArr = [
    [1,2,3,4,5],
    ["a", "b", "c"],
    [true, false, true]
]; //
console.log(myArr[1][2]);
let myArr2 = new Array(); // mang  rong
let myArr3 = [1,2,3,4,5,6,true, false, "cat", null, undefined];
console.log(myArr3[8]);
myArr3[11] = "dog";
for(let i of myArr3){
    console.log(i)
}
// kieu du lieu danh cho array; 
console.log(typeof myArr3); // object


let numberArr = [1,2,3,4,5,6,7,8,9,10];
// tinh tong cac so chan trong mang
// filler va reduce
// chaing ...
let sum1 = numberArr.filter( n => n % 2 == 0).reduce((v1, c) => v1 + c);
console.log(sum1);



