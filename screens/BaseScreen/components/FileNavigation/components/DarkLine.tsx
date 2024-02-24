import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../../util/DimentionFunctions";
import Feather from "react-native-vector-icons/Feather";
import { useState } from "react";

interface LightLineProps {
  empty: boolean;
  folder: boolean;
  name: string;
}

export default function DarkLine({ empty, folder, name }: LightLineProps) {
  const [iconName] = useState(folder ? "folder" : "file-text");

  return (
    <Pressable onPress={() => console.log(`Pressed ${name}`)}>
      <View style={styles.container}>
        {!empty && <Feather name={iconName} size={35} color={"#CCD6F6"} />}
        {!empty && (
          <Text style={styles.name}>
            {name}
            {!folder ? ".md" : ""}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: horizontalScale(35),
    paddingTop: verticalScale(5),
    backgroundColor: "#232324",
    width: "100%",
    height: verticalScale(50),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingBottom: verticalScale(5),
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
