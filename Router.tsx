import { useEffect } from "react";
import { useStateProvider } from "./providers/StateProvider";
import DirScreen from "./screens/DirScreen/DirScreen";
import FileScreen from "./screens/FileScreen/FileScreen";
import { Tree } from "./data/Tree";

export default function Router() {
  const { state, setTree } = useStateProvider();

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  const loadDataFromLocalStorage = async () => {
    // Check if data in localstorage
    // Set the tree via provider if exists
    // If no data, create a new tree
    /* FOR TESTING:: */
    const tree: Tree = new Tree();
    setTree(tree);
  };

  return state === "DIR" ? <DirScreen /> : <FileScreen />;
}
