import { View, Text, Pressable, Alert } from "react-native";
import { styles } from "./FooterStyles";
import Feather from "react-native-vector-icons/Feather";
import { useStateProvider } from "../../../../providers/StateProvider";

export default function Footer() {
  const { tree, currentNote, setState, markdownText, saveDataAsync } =
    useStateProvider();

  const handleBack = () => {
    tree.updateNoteToCurrentNode(currentNote, markdownText);
    setState("DIR");
    saveDataAsync();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Pressable onPress={handleBack}>
          <Feather name="corner-down-left" size={55} color={"#CCD6F6"} />
        </Pressable>
      </View>
    </View>
  );
}
