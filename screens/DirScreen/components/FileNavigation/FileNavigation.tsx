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

  useEffect(() => {
    const folders: LineProps[] = tree.currentNode.childNodes.map((node) => ({
      folder: true,
      name: node.name,
    }));

    console.log("FOLDERS" + folders);

    const notes: LineProps[] = tree.currentNode.values.map((note) => ({
      folder: false,
      name: note.name,
    }));

    console.log("NOTES " + notes);

    const concatinatedData: LineProps[] = folders.concat(notes);
    setDataArray(concatinatedData);

    console.log("DATA UPDATED!!!!");
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
