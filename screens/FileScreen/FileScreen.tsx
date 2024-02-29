import { View, Text } from "react-native";
import { styles } from "./FileScreenStyles";
import { Header } from "./components/Header/Header";
import NoteSection from "./components/NoteSection/NoteSection";
import Footer from "./components/Footer/Footer";

export default function FileScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <NoteSection />
      <Footer />
    </View>
  );
}
