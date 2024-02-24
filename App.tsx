import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StateProvider } from "./providers/StateProvider";
import Router from "./Router";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StateProvider>
        <Router />
      </StateProvider>
    </GestureHandlerRootView>
  );
}
