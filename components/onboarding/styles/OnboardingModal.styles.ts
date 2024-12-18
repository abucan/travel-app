import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  bottomSheetView: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    width: "100%",
    gap: 16,
  },
});
