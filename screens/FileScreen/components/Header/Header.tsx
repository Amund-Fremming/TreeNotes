import { View, Text, Pressable } from "react-native";
import { styles } from "./HeaderStyles";
import { useStateProvider } from "../../../../providers/StateProvider";
import Feather from "react-native-vector-icons/Feather";

export function Header() {
    const { tree, currentNote, setState, markdownText, saveDataAsync } =
        useStateProvider();

  const handleBack = () => {
      tree.updateNoteToCurrentNode(currentNote, markdownText);
      setState("DIR");
      saveDataAsync();
  };

  return (
      <View style={styles.container}>
        <Pressable style={styles.icon} onPress={handleBack}>
            <Feather name="arrow-left" size={55} color={"rgba(217, 217, 217, 0.3)"} />
        </Pressable>

        <Text style={styles.header}>{currentNote}</Text>
      </View>
  );
}
