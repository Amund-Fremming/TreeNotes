import { View, Text } from "react-native";
import { styles } from "./FileScreenStyles";
import { useStateProvider } from "../../providers/StateProvider";
import { Header } from "./components/Header/Header";

export default function FileScreen() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
