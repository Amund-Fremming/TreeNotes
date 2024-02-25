import { View, Text, Pressable } from "react-native";
import { styles } from "./FooterStyles";
import Feather from "react-native-vector-icons/Feather";
import { useStateProvider } from "../../../../providers/StateProvider";
import Dialog from "react-native-dialog";
import { useState } from "react";
import { TreeNode } from "../../../../data/TreeNode";
import { Note } from "../../../../data/Note";

export default function Footer() {
  const [folderDialogVisible, setFolderDialogVisible] = useState(false);
  const [fileDialogVisible, setFileDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { tree, updateTrigger, setUpdateTrigger } = useStateProvider();

  const handleAddFolder = () => {
    setFolderDialogVisible(false);
    const treeNode: TreeNode = new TreeNode(inputValue);
    tree.addTreeNodeToCurrentNode(treeNode);
    setUpdateTrigger(!updateTrigger);
    setInputValue("");
  };

  const handleAddFile = () => {
    setFileDialogVisible(false);

    const note: Note = new Note(inputValue);
    tree.addNoteToCurrentNode(note);
    setUpdateTrigger(!updateTrigger);
    setInputValue("");
  };

  const handleCancel = () => {
    setFileDialogVisible(false);
    setFolderDialogVisible(false);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Pressable onPress={() => setFileDialogVisible(true)}>
          <Feather name="file-plus" size={55} color={"#CCD6F6"} />
        </Pressable>
        <Pressable onPress={() => setFolderDialogVisible(true)}>
          <Feather name="folder-plus" size={55} color={"#CCD6F6"} />
        </Pressable>
      </View>

      <Dialog.Container visible={folderDialogVisible}>
        <Dialog.Title>Folder Name:</Dialog.Title>
        <Dialog.Input
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Create" onPress={handleAddFolder} />
      </Dialog.Container>

      <Dialog.Container visible={fileDialogVisible}>
        <Dialog.Title>File Name:</Dialog.Title>
        <Dialog.Input
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        />
        <Dialog.Button label="Cancel" onPress={handleCancel} />
        <Dialog.Button label="Create" onPress={handleAddFile} />
      </Dialog.Container>
    </View>
  );
}
