import { View, Text } from "react-native";
import { styles } from "./HeaderStyles";
import { useStateProvider } from "../../../../providers/StateProvider";

export default function Header() {
  const { tree } = useStateProvider();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TreeNotes</Text>
      <View style={styles.terminalWrapper}>
        <Text style={styles.subHeaderRoot}>@tree</Text>
        <Text style={styles.subHeaderSeparation}>:</Text>
        <Text style={styles.subHeaderUser}>~{tree.path}</Text>
        <Text style={styles.subHeaderSeparation}>$ </Text>
        <Text style={styles.subHeaderSeparation}></Text>
      </View>
    </View>
  );
}
