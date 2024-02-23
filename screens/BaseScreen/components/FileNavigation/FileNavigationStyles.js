import { StyleSheet } from "react-native";
import { moderateScale } from "../../../../util/DimentionFunctions";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },

  boxDisplay: {
    flexDirection: "column",
    backgroundColor: "#D9D9D9",
    borderRadius: moderateScale(20),
    height: "100%",
    width: "90%",
  },

  lineDisplay: {},
});
