// bien trong js
/*
* kieu du lieu trong js
*/
let name = "Teo"
let number = 10.13;
// int n = 10; java, C++, C# ....
// var age = 20;
const PI = 3.14;
let money; // undefined
let type = typeof money;
console.log(typeof(money));
console.log(typeof number);
let test = name / 0;
console.log(test);
console.log(typeof test);
let address = `Ha
Noi ${name}`;
console.log(address);
let isActive = true;
let isClose = false;
console.log(isActive, typeof isActive);
/// 
let x = 10;
let y = "a20"; // nummber string
let z = x - y; 
console.log(z, typeof z)
// toan tu 
// == : so sanh gia tri
//  === : so sanh gia tri va kieu du lieu
let compare = 10 != "10";
let compare2 = 10 !== "10";
console.log(compare, typeof compare);
console.log(compare2, typeof compare2);
// ++i; i++
// --j; j--
let i = 10;
let j = 9;
let k = (++i) + (--j) + (i++) + (j++) - (--i) + (++j);
//        11  +  8    +   11  +   8   -   11  +  10
console.log(k); // 

//let t = null;
//let t2 = "";
let test3 = 1;
if(test3 == true){
    console.log("OK");
} else {
    console.log("Not OK");
}
let array = [1,2,3,4,5,6];
let size = array.length;
for(let i = 0; i < size; i++) {
    console.log(array[i]);
}
for(let item of array){
    console.log(item);
}
console.log("--------------------------------------");
let test5 = 1;
do {
    console.log(test5); // ???
    test5++;
    if(test5 == 6){
        //break;
        //return;
        //console.log(test5); // ???
        continue;
    }
    console.log("--------------");
    console.log(test5); // ???

   
} while(test5 < 10);

// try {
//     // code oke
// } catch (error) {
//     // co van de
// } finally {
//     // code chay su cung
// }
