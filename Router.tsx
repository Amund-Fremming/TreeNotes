import { useEffect } from "react";
import { useStateProvider } from "./providers/StateProvider";
import DirScreen from "./screens/DirScreen/DirScreen";
import FileScreen from "./screens/FileScreen/FileScreen";
import { Tree } from "./data/Tree";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Router() {
  const { state, setTree } = useStateProvider();

  useEffect(() => {
    loadDataFromLocalStorage();
    fetchDataFromAsyncStorage();
  }, []);

  const fetchDataFromAsyncStorage = async () => {
    const jsonRaw = await AsyncStorage.getItem("tree");
    if (jsonRaw != null) {
      const parsedData: Tree = await JSON.parse(jsonRaw);

      console.log(parsedData);

      setTree(parsedData);
    }
  };

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
