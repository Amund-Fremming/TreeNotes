import { StyleSheet } from "react-native";
import {
  moderateScale,
  verticalScale,
} from "../../../../util/DimentionFunctions";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(50),
  },

  boxDisplay: {
    flexDirection: "column",
    backgroundColor: "rgba(217, 217, 217, 0.1)",
    borderRadius: moderateScale(15),
    height: "100%",
    width: "100%",
  },

  header: {
    fontFamily: "JetBrainsMono",
    fontSize: moderateScale(20),
    color: "#64FFDA",
    paddingTop: verticalScale(20),
    paddingLeft: verticalScale(80),
    paddingBottom: verticalScale(2),
  },
});
