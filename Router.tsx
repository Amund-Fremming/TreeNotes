import { useEffect } from "react";
import { useStateProvider } from "./providers/StateProvider";
import DirScreen from "./screens/DirScreen/DirScreen";
import FileScreen from "./screens/FileScreen/FileScreen";
import { Tree } from "./data/Tree";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Restore } from "./data/Restore";
import { styles } from "./RouterStyles";
import { View } from "react-native";

export default function Router() {
  const { state, setTree, updateTrigger, setUpdateTrigger } = useStateProvider();

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
      setUpdateTrigger(!updateTrigger);
    }
  };

  const loadDataFromLocalStorage = async () => {
    const tree: Tree = new Tree();
    setTree(tree);
  };

  return(
      <View style={styles.bg}>
      {state === "DIR" ? <DirScreen /> : <FileScreen />}
      </View>
  );
}
