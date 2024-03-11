import { StyleSheet } from "react-native";
import {
    moderateScale,
    verticalScale,
} from "../../../../util/DimentionFunctions";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: verticalScale(45),
        width: "80%",
        color: "rgba(217, 217, 217, 0.2)",
        gap: moderateScale(20),
    },

    header: {
        color: "rgba(217, 217, 217, 0.2)",
        /*color: "#CCD6F6",*/
        fontSize: moderateScale(50),
        fontFamily: "JetBrainsMono",
    },

    icon: {
        color: "rgba(217, 217, 217, 0.2)",
        marginTop: moderateScale(5)
    }
});
