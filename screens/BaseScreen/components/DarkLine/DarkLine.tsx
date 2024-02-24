import { View, Text, Pressable } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useState } from "react";
import { styles } from "./DarkLineStyles";

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
