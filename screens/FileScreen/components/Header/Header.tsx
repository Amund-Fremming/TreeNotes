import { View, Text } from "react-native";
import { styles } from "./HeaderStyles";
import { useStateProvider } from "../../../../providers/StateProvider";

export function Header() {
  const { currentNote, markdownText } = useStateProvider();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{currentNote}</Text>
    </View>
  );
}
