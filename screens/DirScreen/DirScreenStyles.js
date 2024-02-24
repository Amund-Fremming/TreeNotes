import { StyleSheet } from "react-native";
import { horizontalScale } from "../../util/DimentionFunctions";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    paddingTop: horizontalScale(50),
    backgroundColor: "#0E0E10",
  },
});
