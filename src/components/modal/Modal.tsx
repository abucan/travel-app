import { Pressable, Text, View } from "react-native";
import Modal from "react-native-modal";

import { styles } from "./Modal.styles";
import { Ionicons } from "@expo/vector-icons";

export const MyModal = ({
  modalOpen,
  setModalOpen,
  children,
  disableOutsideClick = false,
  isDialog = false,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  disableOutsideClick?: boolean;
  isDialog?: boolean;
}) => {
  const closeHandler = () => {
    if (disableOutsideClick) return;
    setModalOpen(false);
  };

  const modalStyle = isDialog ? styles.dialog : styles.modal;
  const wrapperStyle = isDialog ? styles.dialogWrapper : styles.wrapper;

  return (
    <Modal
      style={modalStyle}
      isVisible={modalOpen}
      onBackdropPress={closeHandler}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      animationInTiming={400}
      animationOutTiming={600}
    >
      <View style={[styles.wrapper, wrapperStyle]}>
        <View style={styles.header}>
          <Text style={styles.title}>Modal</Text>
        </View>
        <Pressable style={styles.close} onPress={() => setModalOpen(false)}>
          <Ionicons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            style={styles.icon}
          />
        </Pressable>
        {children}
      </View>
    </Modal>
  );
};
