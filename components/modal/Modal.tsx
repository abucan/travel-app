import { View } from "react-native";
import Modal from "react-native-modal";

import { styles } from "./Modal.styles";

export const MyModal = ({
  modalOpen,
  setModalOpen,
  children,
  disableOutsideClick = false,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  disableOutsideClick?: boolean;
}) => {
  const closeHandler = () => {
    if (disableOutsideClick) return;
    setModalOpen(false);
  };

  return (
    <Modal
      isVisible={modalOpen}
      style={styles.modal}
      onBackdropPress={closeHandler}
    >
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};
