import { useEffect, useState } from "react";
import { styles } from "./NoteSectionStyles";
import { TextInput, ScrollView, View, Text } from "react-native";
import { useStateProvider } from "../../../../providers/StateProvider";

export default function NoteSection() {
  const { tree, markdownText, setMarkdownText, currentNote } =
    useStateProvider();

  useEffect(() => {
    const note: number = tree.currentNode.values.findIndex(
      (note) => note.name === currentNote
    );

    const content: string = tree.currentNode.values[note].content;

    setMarkdownText(content);

    // TODO
    // Fikse indentering og utseende på teksten når bruker kommer inn
  }, []);

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        value={markdownText}
        onChangeText={(text: string) => setMarkdownText(text)}
      />
    </ScrollView>
  );
}
