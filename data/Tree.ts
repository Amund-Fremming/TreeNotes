import { Note } from "./Note";
import { TreeNode } from "./TreeNode";

export class Tree {
  root: TreeNode | null;
  currentNode: TreeNode | null;
  path: string;

  constructor() {
    this.root = new TreeNode("root");
    this.root.parentNode = null;
    this.path = "";
    this.currentNode = this.root;
  }

  addTreeNodeToCurrentNode(treeNode: TreeNode) {
    treeNode.parentNode = this.currentNode;
    this.currentNode.childNodes.push(treeNode);
  }

  addNoteToCurrentNode(note: Note) {
    this.currentNode.values.push(note);
  }

  updateNoteToCurrentNode(name: string, content: string) {
    const noteIndex = this.currentNode.values.findIndex(
      (note) => note.name === name
    );

    this.currentNode.values[noteIndex].content = content;
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

    this.path += `/${name}`;
    this.currentNode = nodes[0];
  }

  setCurrentNodeParrentNode() {
    if (this.currentNode.parentNode !== null) {
      this.currentNode = this.currentNode.parentNode;
      const lastBackslashIndex = this.path.lastIndexOf("/");
      this.path = this.path.substring(0, lastBackslashIndex);
      return;
    }
  }

  removeParentReferences(node = this.root) {
    if (!node) return;

    node.childNodes.forEach((child) => {
      child.parentNode = null;
      this.removeParentReferences(child);
    });
  }

  restoreParentReferences(node = this.root) {
    if (!node) return;

    node.childNodes.forEach((child) => {
      child.parentNode = node;
      this.restoreParentReferences(child);
    });
  }

  serialize() {
    this.removeParentReferences();
    const serializedTree = JSON.stringify(this.root);
    this.restoreParentReferences(); // For treet i minnet
    return serializedTree;
  }
}
