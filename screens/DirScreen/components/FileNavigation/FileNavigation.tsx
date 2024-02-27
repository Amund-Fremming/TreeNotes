import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./FileNavigationStyles";
import AppleStyleSwipableRow from "../AppleStyleSwipeableRow/AppleStyleSwipableRow";
import { useStateProvider } from "../../../../providers/StateProvider";

export interface LineProps {
  folder: boolean;
  name: string;
  light?: boolean;
  empty?: boolean;
  index?: number;
}

export default function FileNavigation() {
  const { tree, updateTrigger } = useStateProvider();
  const [dataArray, setDataArray] = useState<LineProps[] | null>(null);

  console.log("TREE IN NAV");
  console.log(tree.currentNode.childNodes);

  useEffect(() => {
    let folders: LineProps[];
    try {
      folders = tree.currentNode.childNodes.map((node) => ({
        folder: true,
        name: node.name,
      }));
    } catch (error) {
      console.error("Error in folders arr");
    }

    let notes;
    try {
      notes = tree.currentNode.values.map((note) => ({
        folder: false,
        name: note.name,
      }));
    } catch (error) {
      console.error("Error in notes arr");
    }

    const concatinatedData: LineProps[] = folders.concat(notes);
    setDataArray(concatinatedData);
  }, [updateTrigger]);

  return (
    <View style={styles.container}>
      <View style={styles.boxDisplay}>
        <Text style={styles.header}>Name</Text>
        <FlatList
          style={{ width: "100%" }}
          data={dataArray}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <AppleStyleSwipableRow {...item} index={index} />
          )}
        />
      </View>
    </View>
  );
}
