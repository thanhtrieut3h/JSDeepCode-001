"use strict";

// tim ve ojbect trong js
let students = {}; // empty object
let person = []; // empty array
// => kieu du lieu van goi la object
// Doi tuong : thuc the ngoai doi song tu nhien - chi can qun tam : 
// hanh dong - phuong thuc cua doi tuong la gi ? fucntion JS
// thuoc tinh - trang thai cua doi tuong la gi ? bien JS (dac diem tinh chat)
let st = {
    name: "Phuong",
    age: 20,
    "my address": "Ha Noi", // ko nen viet
    myAddress: "Hung Yen",
    getName: function(){
        return this.name; // ~ st
    },
    getAge(){
        return this.age;
    },
    doHomeWork(){
        console.log("JS");
    },
    getAddress: () => {
        // trong arrow function khong co this
        // return this.myAddress
        return st.myAddress;
    }
}
st.email = "test@gmail.com"; // bo sung thuoc tinh vao object
st.goToSchool = function(){
    console.log("My School");
} // bo sung phuong thuc vao oject
console.log(st.name); // truy cap vao thuoc tinh cua object
console.log(st.getAge()); // () : thuc thi chy ham
console.log(st.getAddress());
// ket hop giua array object

let studentLists = [
    {
        id: 1,
        name: "phuong",
        age: 20,
        address: "Hung Yen",
        money: 1000
    },
    {
        id: 2,
        name: "Chung",
        age: 21,
        address: "Ha Noi",
        money: 1000
    },
    {
        id: 3,
        name: "Thang",
        age: 20,
        address: "Thai Binh",
        money: 1400
    },
    {
        id: 4,
        name: "khoa",
        age: 25,
        address: "Thanh Hoa",
        money: 1600
    },
];
// loc ra tat ca sinh vien tren 20 tuoi
const dta =  studentLists.filter(item => item.age > 20)
            .map(val => `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.age}</td>
                    <td>${val.address}</td>
                    <td>${val.money}</td>
                </tr>
            `);
console.log(dta);
// tim ra sinh vien co so tien nhieu nhat
// Math.max(); //
// loc ra sinh vien co ho ten bat dau bang ky tu "P"
// tim ra sinh vien nao duoi 21 tuoi va co so tien tren 1000 que o ha noi



