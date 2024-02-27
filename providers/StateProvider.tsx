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
}

const defaultContextValue: IStateContext = {
  state: "DIR",
  setState: () => {},
  tree: null,
  setTree: () => {},
  updateTrigger: true,
  setUpdateTrigger: () => {},
  saveDataAsync: () => {},
};

const StateContext = createContext<IStateContext>(defaultContextValue);

export const useStateProvider = () => useContext(StateContext);

export const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<string>("DIR");
  const [tree, setTree] = useState<Tree | null>(null);
  const [updateTrigger, setUpdateTrigger] = useState<boolean>(true);

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
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
