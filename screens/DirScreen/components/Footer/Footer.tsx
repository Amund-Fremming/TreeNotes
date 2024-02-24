import { View, Text, Pressable } from "react-native";
import { styles } from "./FooterStyles";
import Feather from "react-native-vector-icons/Feather";

export default function Footer() {
  const handleAddFolder = () => {
    // TODO
    console.log("Folder added!");
  };

  const handleAddFile = () => {
    // TODO
    console.log("File added!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Pressable onPress={handleAddFile}>
          <Feather name="file-plus" size={55} color={"#CCD6F6"} />
        </Pressable>
        <Pressable onPress={handleAddFolder}>
          <Feather name="folder-plus" size={55} color={"#CCD6F6"} />
        </Pressable>
      </View>
    </View>
  );
}
