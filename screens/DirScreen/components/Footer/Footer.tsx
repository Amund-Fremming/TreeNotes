import { View, Text, Pressable, Alert } from "react-native";
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

  const { tree, updateTrigger, setUpdateTrigger, saveDataAsync } =
    useStateProvider();

  const handleAddFolder = () => {
    if (tree.currentNode.childNodes.length > 18) {
      Alert.alert("To many files!", "The maximum capasity for files are 5!");
      return;
    }

    if (inputValue.length > 18) {
      Alert.alert("Invalid input", "Name too long!");
      return;
    }

    const listWithCurrentDirNames = tree.currentNode.childNodes.filter(
      (node) => node.name === inputValue
    );

    if (listWithCurrentDirNames.length !== 0) {
      Alert.alert("Name Conflict", "The name you inserted already exists!");
      return;
    }

    setFolderDialogVisible(false);
    if (!folderDialogVisible) return; // For disabling doble creation of files

    const treeNode: TreeNode = new TreeNode(inputValue);
    tree.addTreeNodeToCurrentNode(treeNode);

    setUpdateTrigger(!updateTrigger);
    setInputValue("");
    saveDataAsync();
  };

  const handleAddFile = () => {
    if (tree.currentNode.values.length > 4) {
      Alert.alert("To many files!", "The maximum capasity for files are 5!");
      return;
    }

    if (inputValue.length > 18) {
      Alert.alert("Invalid input", "Name too long!");
      return;
    }

    const listWithCurrentFileNames = tree.currentNode.values.filter(
      (node) => node.name === inputValue
    );
    if (listWithCurrentFileNames.length !== 0) {
      Alert.alert("Name Conflict", "The name you inserted already exists!");
      return;
    }

    setFileDialogVisible(false);
    if (!fileDialogVisible) return; // For disabling doble creation of files

    const note: Note = new Note(inputValue);
    tree.addNoteToCurrentNode(note);

    setUpdateTrigger(!updateTrigger);
    setInputValue("");
    saveDataAsync();
  };

  const handleCancel = () => {
    setFileDialogVisible(false);
    setFolderDialogVisible(false);
    setInputValue("");
  };

  const handleBack = () => {
    tree.setCurrentNodeParrentNode();
    setUpdateTrigger(!updateTrigger);
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
        <Pressable onPress={handleBack}>
          <Feather name="corner-down-left" size={55} color={"#CCD6F6"} />
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
