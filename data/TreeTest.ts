import { TreeNode } from "./TreeNode";
import { Note } from "./Note";
import { Tree } from "./Tree";

const tree: Tree = new Tree();

const node1 = new TreeNode("folder1");
const node2 = new TreeNode("folder2");

tree.addTreeNodeToCurrentNode(node1);
tree.addTreeNodeToCurrentNode(node2);

console.log(tree.currentNode);

tree.removeTreeNodeFromCurrentNode("folder2");

console.log(tree.currentNode);
