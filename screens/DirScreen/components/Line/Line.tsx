import { View, Text, Pressable } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { styles } from "./LineStyles";
import { useStateProvider } from "../../../../providers/StateProvider";
import { LineProps } from "../FileNavigation/FileNavigation";

export default function Line({ empty, folder, name, light }: LineProps) {
  const { setState, tree, updateTrigger, setUpdateTrigger } =
    useStateProvider();

  const handleDirPressed = () => {
    setState("DIR");
    tree.setCurrentNode(name);
    setUpdateTrigger(!updateTrigger);
    console.log("TREEEE PLACE " + tree.currentNode.name);
  };

  const handleFilePressed = () => {
    // TODO
    setState("FILE");
    console.log("File pressed");
  };

  const setHandlerFunction = () => {
    if (folder) {
      return handleDirPressed;
    }

    return handleFilePressed;
  };

  return (
    <Pressable onPress={setHandlerFunction()}>
      <View style={light ? styles.lightContainer : styles.darkContainer}>
        {!empty && (
          <Feather
            name={folder ? "folder" : "file-text"}
            size={35}
            color={"#CCD6F6"}
          />
        )}
        {!empty && (
          <Text style={styles.name}>
            {name}
            {!folder ? ".md" : ""}
          </Text>
        )}
      </View>
    </Pressable>
  );
}
