import { StyleSheet } from "react-native";
import {
  horizontalScale,
  verticalScale,
} from "../../../../util/DimentionFunctions";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
    position: "absolute",
    bottom: verticalScale(35),
    right: horizontalScale(20),
  },

  buttonWrapper: {
    gap: horizontalScale(20),
    flexDirection: "row-reverse",
  },
});
