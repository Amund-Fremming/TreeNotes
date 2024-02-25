import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { Tree } from "../data/Tree";

interface IStateContext {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  tree: Tree | null;
  setTree: Dispatch<SetStateAction<Tree>>;
  updateTrigger: boolean;
  setUpdateTrigger: Dispatch<SetStateAction<boolean>>;
}

const defaultContextValue: IStateContext = {
  state: "DIR",
  setState: () => {},
  tree: null,
  setTree: () => {},
  updateTrigger: true,
  setUpdateTrigger: () => {},
};

const StateContext = createContext<IStateContext>(defaultContextValue);

export const useStateProvider = () => useContext(StateContext);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<string>("DIR");
  const [tree, setTree] = useState<Tree | null>(null);
  const [updateTrigger, setUpdateTrigger] = useState<boolean>(true);

  const value = {
    state,
    setState,
    tree,
    setTree,
    updateTrigger,
    setUpdateTrigger,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
