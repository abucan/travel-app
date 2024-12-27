import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
    animationName: "slideInUp",
  },

  dialog: {
    margin: 10,
    justifyContent: 'center',
    animationName: "slideInUp",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: Spacing.lg,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
    paddingVertical: Platform.OS === "android" ? Spacing.xl : Spacing.xxl,
  },

  dialogWrapper: {
    borderRadius: 12
  }
});
