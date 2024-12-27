import { View } from "react-native";
import Modal from "react-native-modal";

import { styles } from "./Modal.styles";

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
    >
      <View style={[styles.wrapper, wrapperStyle]}>{children}</View>
    </Modal>
  );
};
