import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { Tree } from "../data/Tree";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IStateContext {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  tree: Tree | null;
  setTree: Dispatch<SetStateAction<Tree>>;
  updateTrigger: boolean;
  setUpdateTrigger: Dispatch<SetStateAction<boolean>>;
  saveDataAsync: () => void;
  currentNote: string;
  setCurrentNote: Dispatch<SetStateAction<string>>;
  markdownText: string;
  setMarkdownText: Dispatch<SetStateAction<string>>;
}

const defaultContextValue: IStateContext = {
  state: "DIR",
  setState: () => {},
  tree: null,
  setTree: () => {},
  updateTrigger: true,
  setUpdateTrigger: () => {},
  saveDataAsync: () => {},
  currentNote: "none",
  setCurrentNote: () => {},
  markdownText: "",
  setMarkdownText: () => {},
};

const StateContext = createContext<IStateContext>(defaultContextValue);

export const useStateProvider = () => useContext(StateContext);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<string>("DIR");
  const [tree, setTree] = useState<Tree | null>(null);
  const [updateTrigger, setUpdateTrigger] = useState<boolean>(true);
  const [currentNote, setCurrentNote] = useState<string>("none");
  const [markdownText, setMarkdownText] = useState<string>("");

  const saveDataAsync = async () => {
    // TODO - Only save data that is not already saved
    try {
      // Fiks denne
      await AsyncStorage.setItem("test", "test");
      await AsyncStorage.clear();

      const serializedTree = tree.serialize();

      await AsyncStorage.setItem("tree", serializedTree);
    } catch (error) {
      console.error("Error while saving to AsyncStorage", error);
    }
  };

  const value = {
    state,
    setState,
    tree,
    setTree,
    updateTrigger,
    setUpdateTrigger,
    saveDataAsync,
    currentNote,
    setCurrentNote,
    markdownText,
    setMarkdownText,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
