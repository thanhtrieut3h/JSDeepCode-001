// viet ham tinh chieu cao cua 1 cay ?
function getTreeHeight(root){
    if(!root) return 0; // khong co node nao

    if(root.children.length === 0) return 1; // co mot nut goc
    let maxChildHeight = 0;
    for(let child of root.children){
        const childHeight = getTreeHeight(child);
        maxChildHeight = Math.max(maxChildHeight, childHeight);
    }
    return maxChildHeight + 1;
}
// viet ham dem cay co bao nhieu Node
function countNodes(root){
    if(!root) return 0;
    let count = 1; // mac dinh co not goc
    for(let child of root.children){
        count += countNodes(child);
    }
    return count;
}
// viet ham tim node co gia tri lon nhat va nho nhat (ap dung cay co gia tri la so)

const helperTree = {
    getTreeHeight,
    countNodes
}
export default helperTree;