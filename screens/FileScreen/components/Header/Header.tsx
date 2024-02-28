import { View, Text, Pressable } from "react-native";
import { styles } from "./HeaderStyles";
import { useStateProvider } from "../../../../providers/StateProvider";

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
      <Pressable onPress={handleBack}>
        <Text style={styles.header}>&#60;&nbsp;</Text>
      </Pressable>
      <Text style={styles.header}>{currentNote}</Text>
    </View>
  );
}
