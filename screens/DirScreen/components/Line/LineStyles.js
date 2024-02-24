import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../../../util/DimentionFunctions";

export const styles = StyleSheet.create({
  lightContainer: {
    paddingLeft: horizontalScale(35),
    paddingTop: verticalScale(5),
    backgroundColor: "#474748",
    width: "100%",
    height: verticalScale(50),
    borderRadius: moderateScale(7),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingBottom: verticalScale(7),
    gap: verticalScale(10),
  },

  darkContainer: {
    paddingLeft: horizontalScale(35),
    paddingTop: verticalScale(5),
    backgroundColor: "#232324",
    width: "100%",
    height: verticalScale(50),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingBottom: verticalScale(7),
    borderRadius: moderateScale(7),
    zIndex: 1,
    gap: verticalScale(10),
  },

  name: {
    fontFamily: "JetBrainsMonoLight",
    fontSize: moderateScale(20),
    color: "white",
  },
});
