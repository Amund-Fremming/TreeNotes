import React from "react";
import BaseScreen from "./screens/BaseScreen/BaseScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BaseScreen />
    </GestureHandlerRootView>
  );
}
