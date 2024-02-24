import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { TreeNode, Note } from "../data/TreeNode";

interface IStateContext {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  currentNote: Note | undefined;
  setCurrentNote: Dispatch<SetStateAction<Note>> | undefined;
  currentTreeNode: TreeNode | undefined;
  setCurrentTreeNode: Dispatch<SetStateAction<TreeNode>> | undefined;
}

const defaultContextValue: IStateContext = {
  state: "DIR",
  setState: () => {},
  currentNote: undefined,
  setCurrentNote: () => {},
  currentTreeNode: undefined,
  setCurrentTreeNode: () => {},
};

const StateContext = createContext<IStateContext>(defaultContextValue);

export const useStateProvider = () => useContext(StateContext);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<string>("DIR");
  const [currentNote, setCurrentNote] = useState<Note | undefined>(undefined);
  const [currentTreeNode, setCurrentTreeNode] = useState<TreeNode | undefined>(
    undefined
  );

  const value = {
    state,
    setState,
    currentNote,
    setCurrentNote,
    currentTreeNode,
    setCurrentTreeNode,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
