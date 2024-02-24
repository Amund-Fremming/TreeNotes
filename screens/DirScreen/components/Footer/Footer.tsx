import { View, Text, Pressable } from "react-native";
import { styles } from "./FooterStyles";
import Feather from "react-native-vector-icons/Feather";
import { useStateProvider } from "../../../../providers/StateProvider";
import Dialog from "react-native-dialog";
import { useState } from "react";

export default function Footer() {
  const { setState, setCurrentNote } = useStateProvider();
  const [folderDialogVisible, setFolderDialogVisible] = useState(false);
  const [fileDialogVisible, setFileDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const showFolderDialog = () => setFolderDialogVisible(true);
  const showFileDialog = () => setFileDialogVisible(true);
  const handleAddFolder = () => {
    setFolderDialogVisible(false);
    // TODO
    console.log("Folder added!");
    // Create a new TreeNode
    // Set the currentNode to this new Node
  };

  const handleAddFile = () => {
    setFileDialogVisible(false);
    setState("FILE");
    // TODO
    console.log("File added!");
    // Create a new Note
    // Add the Note to this TreeNode
    // setCurrentNote(x) to this TreeNode value with name
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
