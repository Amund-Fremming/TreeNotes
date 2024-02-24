import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Animated } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import DarkLine from "./DarkLine";
import LightLine from "./LightLine";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../../../util/DimentionFunctions";

interface file {
  name: string;
  folder: boolean;
}

interface Props {
  item: file;
  index: number;
}

const AppleStyleSwipableRow = ({ item, index }: Props) => {
  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton
        style={styles.leftAction}
        onPress={() => console.log(`Deleted ${item.name}!`)}
      >
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Archive
        </Animated.Text>
      </RectButton>
    );
  };

  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      {index % 2 !== 0 ? (
        <DarkLine empty={false} folder={item.folder} name={item.name} />
      ) : (
        <LightLine empty={false} folder={item.folder} name={item.name} />
      )}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    backgroundColor: "#DD073A",
    justifyContent: "flex-end",
    paddingBottom: verticalScale(6),
    padding: moderateScale(4),
    zIndex: 10,
    borderRadius: moderateScale(7),
  },

  actionText: {
    fontFamily: "JetBrainsMono",
    fontSize: moderateScale(15),
    color: "white",
  },
});

export default AppleStyleSwipableRow;
