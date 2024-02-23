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
    color: "white",
    fontSize: moderateScale(50),
    fontWeight: "bold",
  },

  subHeaderRoot: {
    fontSize: moderateScale(18),
    color: "#468006",
  },

  terminalWrapper: {
    flexDirection: "row",
  },

  subHeaderUser: {
    fontSize: moderateScale(18),
    color: "#3162A2",
  },

  subHeaderSeparation: {
    fontSize: moderateScale(18),
    color: "white",
  },
});
