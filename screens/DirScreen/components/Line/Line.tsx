import { View, Text, Pressable } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useState } from "react";
import { styles } from "./LineStyles";
import { useStateProvider } from "../../../../providers/StateProvider";
import { LineProps } from "../FileNavigation/FileNavigation";

export default function Line({ empty, folder, name, light }: LineProps) {
  const [iconName] = useState(folder ? "folder" : "file-text");

  const { setState } = useStateProvider();

  const handleDirPressed = () => {
    // TODO
    setState("DIR");
    console.log("Dir pressed");
    // set current node, this nodes, children with name of this dir
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
        {!empty && <Feather name={iconName} size={35} color={"#CCD6F6"} />}
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
