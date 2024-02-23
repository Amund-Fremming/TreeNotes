import { View, Text } from "react-native";
import { styles } from "./BaseScreenStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FileNavigation from "./components/FileNavigation/FileNavigation";

export default function BaseScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <FileNavigation />
      <Footer />
    </View>
  );
}
