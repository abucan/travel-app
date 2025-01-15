import { StyleSheet } from "react-native";
import { Spacing } from "@/src/constants/Spacing";

export const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: Spacing.xs,
  },

  label: {
    color: "#6b7280",
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 14,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
    borderColor: "#CFCFCF",

    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },

  input: {
    flex: 1,
    fontSize: 14,
  },

  textarea: {
    height: 125,
  },

  icon: {
    marginHorizontal: 10,
    color: "grey",
  },

  errorText: {
    color: "red",
    fontSize: 12,
  },
});
