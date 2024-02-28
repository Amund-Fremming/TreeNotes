import { StyleSheet } from "react-native";
import {
  moderateScale,
  verticalScale,
} from "../../../../util/DimentionFunctions";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: verticalScale(35),
  },

  input: {
    padding: moderateScale(30),
    fontFamily: "JetBrainsMono",
    color: "white",
    fontSize: moderateScale(18),
  },
});
