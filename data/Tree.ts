export interface Note {
  name: string;
  header: string;
  note: string;
}

export interface TreeNode {
  children?: TreeNode[];
  values: Note[];
}

class Tree {
  root: TreeNode | null;

  constructor(rootValues: Note[]) {
    if (rootValues !== undefined || rootValues !== null) {
      this.root = { values: rootValues, children: [] };
    } else {
      this.root = null;
    }
  }

  addChild() {}
}
