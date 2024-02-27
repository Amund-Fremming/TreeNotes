import { useEffect } from "react";
import { useStateProvider } from "./providers/StateProvider";
import DirScreen from "./screens/DirScreen/DirScreen";
import FileScreen from "./screens/FileScreen/FileScreen";
import { Tree } from "./data/Tree";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Restore } from "./data/Restore";

export default function Router() {
  const { state, setTree } = useStateProvider();

  useEffect(() => {
    loadDataFromLocalStorage();
    fetchDataFromAsyncStorage();
  }, []);

  const fetchDataFromAsyncStorage = async () => {
    const jsonRaw = await AsyncStorage.getItem("tree");
    if (jsonRaw != null) {
      const parsedData = JSON.parse(jsonRaw);
      const restoredTree = Restore.restoreTreeFromObject(parsedData) as Tree;
      setTree(restoredTree);
    }
  };

  const loadDataFromLocalStorage = async () => {
    const tree: Tree = new Tree();
    setTree(tree);
  };

  return state === "DIR" ? <DirScreen /> : <FileScreen />;
}
