import { StyleSheet } from "react-native";
import { horizontalScale } from "../../util/DimentionFunctions";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    marginTop: horizontalScale(50),
  },
});
