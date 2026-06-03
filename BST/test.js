import BST from "./BinarySearchTree.js";

let root = null;
let value = [10, 5, 15, 3, 1, 7, 12, 18, 99];
// tao ra cay BST
value.forEach(v => {
    root = BST.insert(root, v);
});
// duyet cay BST
console.log("Duyet mang tang dan - Inorder", BST.inorderTraversal(root));
// tim kiem : so 7 va 100 co nam trong BST
console.log("Tim kiem value 7 : ", BST.search(root, 7));
console.log("Tim kiem value 100 : ", BST.search(root, 100));
// find min value and max value
console.log("Gia tri nho nhat trong BST : ", BST.findMin(root));
console.log("Gia tri lon nhat trong BST : ", BST.findMax(root));
// 1 - viet ham dem so luong Node trong BST 
function countNode(root){
    if(root === null){
        return 0;
    }
    return 1 + countNode(root.left) + countNode(root.right); // de quy
}
console.log("So luong Node trong BST : ", countNode(root));
// 2 - tinh tong tat ca cac node trong BST
function sumNode(root){
    if(root === null){
        return 0;
    }
    return root.value + sumNode(root.left) + sumNode(root.right);
}
console.log("Tong gia Node trong BST : ", sumNode(root));