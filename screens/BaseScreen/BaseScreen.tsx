import { View, Text } from "react-native";
import { styles } from "./BaseScreenStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FileNavigation from "./components/FileNavigation/FileNavigation";
import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function BaseScreen() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      JetBrainsMono: require("../../assets/fonts/JetBrainsMono-ExtraBold.ttf"),
    });

    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return <Text>Loading ...</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />
      <FileNavigation />
      <Footer />
    </View>
  );
}
