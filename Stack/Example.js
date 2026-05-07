// cac vi du lam viecj voi Stack
import stack from "./Stack.js";

// 1 - bai toan dao nguoc chuoi dung Stack de xu ly
function reverseString(str){
    const myStack = [];
    for(let char of str){
        stack.push(myStack, char);
    }
    // lay cac phan tu ra tu Stack(se dao nguoc dc chuoi)
    let reverseStr = "";
    while(!stack.isEmpty(myStack)){
        reverseStr += stack.pop(myStack);
    }
    return reverseStr;
}
console.log(reverseString("Hello")); // olleH
console.log(reverseString("Stack")); // kcatS

// 2 - bai toan chuyen doi so thap phan sang so nhi phan
function decimalToBinary(decimal = 0){
    if(decimal === 0){
        return "0";
    }
    let myStack = [];
    while(decimal > 0){
        stack.push(myStack, decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    let binary = "";
    while(!stack.isEmpty(myStack)){
        binary += stack.pop(myStack);
    }
    return binary;
}
console.log(decimalToBinary(10));
console.log(decimalToBinary(42));
console.log(decimalToBinary(255));

// 3 - kiem tra cac dau ngoac co hop le khong ?
// () - [] - {} : Hop le
function isValidCharater(str){
    const myStack = [];
    const pairs = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    };
    for(let char of str){
        if(pairs[char]){
            // neu dung la cac ky tu mo thi push vao Stack
            stack.push(myStack, char);
        } else if (char === ')' || char === ']' || char === '}') {
            if(stack.isEmpty(myStack)){
                return false;
            }
            const lastOpen = stack.pop(myStack);
            if(pairs[lastOpen] !== char){
                return false;
            }
        }
    }
    return stack.isEmpty(myStack);
}
console.log(isValidCharater("()")); // true
console.log(isValidCharater("[]")); // true
console.log(isValidCharater("{}")); // true
console.log(isValidCharater("(]"));
console.log(isValidCharater("(}"));
console.log(isValidCharater("[)"));
console.log(isValidCharater("[}"));
console.log(isValidCharater("{)"));
console.log(isValidCharater("{]"));
