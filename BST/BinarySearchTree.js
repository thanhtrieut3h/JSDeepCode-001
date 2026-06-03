// dinh nghia mot node
function Node(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}
// them gia tri(Node) vao BST(Cay tim kiem nhi phan)
function insert(root, value){
    if(root === null){
        return new Node(value);
    }
    if(value < root.value){
        root.left = insert(root.left, value); // de quy
    } else if(value > root.value){
        root.right = insert(root.right, value); // de quy
    }
    // khong duoc phep them gia tri da co(trung lap)
    return root;
}
// duyet cay tim kiem nhi phan
// 1 - duyet tu trai - goc - phai ==> Tao ra mang tang dan
function inorderTraversal(root, result = []){
    if(root !== null){
        inorderTraversal(root.left, result);
        result.push(root.value);
        inorderTraversal(root.right, result);
    }
    return result;
}
// tim kiem gia tri co trong BST (tra ve true or false)
function search(root, value){
    if(root === null){
        return false;
    }
    if(root.value === value){
        return true;
    }
    // de quy tim kiem
    if(value < root.value){
        return search(root.left, value);
    }
    return search(root.right, value);
}
// tim gia tri nho nhat trong BST
function findMin(root){
    if(root === null){
        return null;
    }
    while(root.left !== null){
        root = root.left;
    }
    return root.value;
}
// tim gia tri lon nhat trong BST
function findMax(root){
    if(root === null){
        return null;
    }
    while(root.right !== null){
        root = root.right;
    }
    return root.value;
}

const BST = {
    Node,
    insert,
    inorderTraversal,
    search,
    findMin,
    findMax
}
export default BST;
