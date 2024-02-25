import { Note } from "./Note";

export class TreeNode {
  name: string;
  parentNode: TreeNode | null;
  childNodes: TreeNode[];
  values: Note[];

  constructor(name: string) {
    this.name = name;
    this.parentNode = null;
    this.childNodes = [];
    this.values = [];
  }
}
