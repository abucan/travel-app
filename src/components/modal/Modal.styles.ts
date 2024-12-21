import { Colors } from "@/src/constants/Colors";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
    animationName: "slideInUp",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 20,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
    paddingVertical: Platform.OS === "android" ? 24 : 32,
  },
});
