import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./FileNavigationStyles";
import AppleStyleSwipableRow from "../AppleStyleSwipeableRow/AppleStyleSwipableRow";

interface file {
  name: string;
  folder: boolean;
}

const files: file[] = [
  {
    name: "Middager",
    folder: true,
  },
  {
    name: "Lunsjer",
    folder: true,
  },
  {
    name: "Kveldsmat",
    folder: true,
  },
  {
    name: "Handleliste",
    folder: false,
  },
  {
    name: "Allergier",
    folder: false,
  },
];

export default function FileNavigation() {
  return (
    <View style={styles.container}>
      <View style={styles.boxDisplay}>
        <Text style={styles.header}>Name</Text>
        <FlatList
          style={{ width: "100%" }}
          data={files}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <AppleStyleSwipableRow item={item} index={index} />
          )}
        />
      </View>
    </View>
  );
}
