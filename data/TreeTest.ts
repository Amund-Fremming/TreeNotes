import { TreeNode } from "./TreeNode";
import { Note } from "./Note";
import { Tree } from "./Tree";

const tree: Tree = new Tree();

const node1 = new TreeNode("folder1");
const node2 = new TreeNode("folder2");

tree.addTreeNodeToCurrentNode(node1);
tree.addTreeNodeToCurrentNode(node2);

tree.setCurrentNode("folder1");

console.log(tree.currentNode);

const note1 = new Note("Note1", "Header1", "bla bla bla bla");
const note2 = new Note("Note2", "Header2", "yap yap yap yap");

tree.addNoteToCurrentNode(note1);
tree.addNoteToCurrentNode(note2);

const nestedNode: TreeNode = new TreeNode("nestedNode1");
tree.addTreeNodeToCurrentNode(nestedNode);
tree.setCurrentNode("nestedNode1");

tree.addNoteToCurrentNode(new Note("SuperNested", "Header", "blruuuuush"));

console.log(tree.currentNode);
