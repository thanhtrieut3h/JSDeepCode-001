import TreeNode from "./TreeNode.js";

// tao ra 1 node trong cay
function createTree(rootValue){
    return new TreeNode(rootValue); // khoi tao node goc
}
// them cac node con vao cay
function addChild(parentNode, childValue){
    const childNode = new TreeNode(childValue); // tao ra node con
    parentNode.children.push(childNode); // bo sung node con vao node cha
    return childNode;
} 
//  Tim node - duyet all
function findNode(root, targetValue){
    if(!root) return null;
    if(root.value === targetValue){
        return root;
    }
    // duyet cay
    for(let child of root.children){
        const found = findNode(child, targetValue); // De quy
        if(found) return found;
    }
    return null;
}
// duyet theo chieu sau
function dfsTree(root, result = []){
    // biet duoc gia cua tat ca cac node, luu vao trong mot mang
    if(!root) return result;
    result.push(root.value); // day node goc vao trong mang
    for(let child of root.children){
        dfsTree(child, result); // de quy
    }
    return result; // co mang chua tat ca gia tri cua node
}
// duyet theo chieu rong
function bfsTree(root){
    // dua vao quy tac hoat dong cua Queue de trien khai thuat toan
    if(!root) return [];
    const result = [];
    const queue = [root];
    while(queue.length > 0){
        const current = queue.shift();
        result.push(current.value);
        // them tat ca cac node con khac vao sau hang doi da chua node goc
        for(let child of current.children){
            queue.push(child);
        }
    }
    return result;
}
function printTree(root, level = 0, prefix = ""){
    if(!root) return;

    console.log(" ".repeat(level) + prefix + root.value);
    for(let i = 0; i < root.children.length; i++){
        const isLast = i === root.children.length - 1;
        printTree(root.children[i], level + 1, isLast ? "|____ " : "|---- ");
    }
}

const tree = {
    createTree,
    dfsTree,
    bfsTree,
    findNode,
    printTree,
    addChild
}
export default tree;