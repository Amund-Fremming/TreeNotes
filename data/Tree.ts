import { Note } from "./Note";
import { TreeNode } from "./TreeNode";

export class Tree {
  root: TreeNode | null;
  currentNode: TreeNode | null;

  constructor() {
    this.root = new TreeNode("root");
    this.root.parentNode = null;
    this.currentNode = this.root;
  }

  addTreeNodeToCurrentNode(treeNode: TreeNode) {
    treeNode.parentNode = this.currentNode;
    this.currentNode.childNodes.push(treeNode);
  }

  addNoteToCurrentNode(note: Note) {
    this.currentNode.values.push(note);
  }

  removeTreeNodeFromCurrentNode(name: string) {
    this.currentNode.childNodes = this.currentNode.childNodes.filter(
      (node) => node.name !== name
    );
  }

  removeNoteFromCurrentNode(name: string) {
    this.currentNode.values = this.currentNode.values.filter(
      (note) => note.name !== name
    );
  }

  setCurrentNode(name: string) {
    const nodes: TreeNode[] = this.currentNode.childNodes.filter(
      (node) => node.name === name
    );

    this.currentNode = nodes[0];
  }

  setCurrentNodeParrentNode() {
    if (this.currentNode.parentNode !== null) {
      this.currentNode = this.currentNode.parentNode;
    }

    console.log("You are currently at the root node!");
  }
}
