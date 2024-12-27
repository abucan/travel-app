import { StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.light.background,
    height: "100%",
  },

  container: {
    width: "100%",
    marginHorizontal: "auto",
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: Spacing.xxl,
    paddingHorizontal: Spacing.lg
  },

  form: {
    gap: Spacing.xl,
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: Spacing.xl,
  },

  text: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
  },

  link: {
    fontFamily: "Helvetica-Now-Display-Bold",
    fontSize: 16,
    color: Colors.light.brand,
    textDecorationLine: "underline",
  },

  forgotPassword: {
    fontFamily: "Helvetica-Now-Display-Medium",
    fontSize: 14,
    color: Colors.light.brand,
    textAlign: "right",
  },
});
