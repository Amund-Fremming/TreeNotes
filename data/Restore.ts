import { Tree } from "./Tree";
import { TreeNode } from "./TreeNode";

export class Restore {
  static restoreTreeFromObject(obj: any): Tree {
    const tree: Tree = new Tree();
    tree.root = Restore.restoreTreeNodeFromObject(obj, null, tree.root);
    tree.path = "";
    return tree;
  }

  static restoreTreeNodeFromObject(
    obj: any,
    parentNode: TreeNode | null,
    existingNode: TreeNode | null = null
  ): TreeNode {
    const node = existingNode ?? new TreeNode(obj.name);
    node.parentNode = parentNode;
    node.values = [...obj.values];

    obj.childNodes.forEach((childObj: any) => {
      const childNode = Restore.restoreTreeNodeFromObject(childObj, node);
      node.childNodes.push(childNode);
    });

    return node;
  }
}
