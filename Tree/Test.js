import myTree from './Tree.js';
import helperTree from './TreeHelper.js';

// tao tree
const companyTree = myTree.createTree("CEO");
const tech = myTree.addChild(companyTree, "Tech");
const hr = myTree.addChild(companyTree, "HR");
const sales = myTree.addChild(companyTree, "Sales");
myTree.addChild(tech, "Frontend");
myTree.addChild(tech, "Backend");
myTree.addChild(hr, "Recuriment");
myTree.addChild(sales, "Domestic");
myTree.addChild(sales, "International");
myTree.printTree(companyTree); // hien thi cay
// tinh chieu cao cua cay ?
console.log("Chieu cao cua cay la : ", helperTree.getTreeHeight(companyTree));
console.log("So luong node cua cay la: ", helperTree.countNodes(companyTree));

const NumberTree = myTree.createTree(1);
const tree1 = myTree.addChild(NumberTree, 2);
const tree2 = myTree.addChild(NumberTree, 3);
const tree3 = myTree.addChild(tree1, 4);
const tree4 = myTree.addChild(tree1, 5);
const tree5 = myTree.addChild(tree4, 6);
const tree6 = myTree.addChild(tree4, 7);
myTree.printTree(NumberTree);