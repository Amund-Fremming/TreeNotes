import { StyleSheet } from "react-native";
import React from "react";
import { Animated } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Line from "../Line/Line";
import {
  moderateScale,
  verticalScale,
} from "../../../../util/DimentionFunctions";
import { LineProps } from "../FileNavigation/FileNavigation";
import { useStateProvider } from "../../../../providers/StateProvider";

interface AppleStyleSwipableRowProps extends LineProps {
  index: number;
}

const AppleStyleSwipableRow = ({
  folder,
  name,
  index,
}: AppleStyleSwipableRowProps) => {
  const { tree, updateTrigger, setUpdateTrigger } = useStateProvider();

  const handleDelete = () => {
    console.log(`Deleted ${name}!`);
    if (folder) {
      tree.removeTreeNodeFromCurrentNode(name);
    }

    if (!folder) {
      tree.removeNoteFromCurrentNode(name);
    }

    setUpdateTrigger(!updateTrigger);
  };

  const renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
      extrapolate: "clamp",
    });
    return (
      <RectButton style={styles.leftAction} onPress={handleDelete}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Delete
        </Animated.Text>
      </RectButton>
    );
  };

  return (
    <Swipeable leftThreshold={200} renderLeftActions={renderLeftActions}>
      <Line
        empty={false}
        folder={folder}
        name={name}
        light={index % 2 == 0 ? true : false}
      />
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    backgroundColor: "#DD073A",
    justifyContent: "flex-end",
    paddingBottom: verticalScale(6),
    paddingLeft: moderateScale(15),
    paddingRight: moderateScale(15),
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
