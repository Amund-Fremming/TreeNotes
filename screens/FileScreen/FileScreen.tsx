import { View, Text } from "react-native";
import { styles } from "./FileScreenStyles";
import { Header } from "./components/Header/Header";
import NoteSection from "./components/NoteSection/NoteSection";

export default function FileScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <NoteSection />
    </View>
  );
}
