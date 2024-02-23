import { View, Text } from "react-native";
import { styles } from "./HeaderStyles";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TreeNotes</Text>
      <View style={styles.terminalWrapper}>
        <Text style={styles.subHeaderRoot}>root@tree</Text>
        <Text style={styles.subHeaderSeparation}>:</Text>
        <Text style={styles.subHeaderUser}> ~/User</Text>
        <Text style={styles.subHeaderSeparation}> $</Text>
      </View>
    </View>
  );
}
