import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../util/DimentionFunctions";

export const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(50),
    flexDirection: "column",
    gap: horizontalScale(18),
  },

  header: {
    color: "#CCD6F6",
    fontSize: moderateScale(55),
    fontFamily: "JetBrainsMono",
  },

  subHeaderRoot: {
    fontSize: moderateScale(18),
    color: "#468006",
    fontFamily: "JetBrainsMono",
  },

  terminalWrapper: {
    flexDirection: "row",
  },

  subHeaderUser: {
    fontSize: moderateScale(18),
    color: "#3162A2",
    fontFamily: "JetBrainsMono",
  },

  subHeaderSeparation: {
    fontSize: moderateScale(18),
    color: "white",
    fontFamily: "JetBrainsMono",
  },
});
