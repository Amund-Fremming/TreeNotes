export interface Note {
  header: string;
  note: string;
}

export interface TreeNode {
  folders: TreeNode[];
  notes: Note[];
}
