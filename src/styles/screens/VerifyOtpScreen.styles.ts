import { StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.light.background,
    height: "100%",
  },

  modalContent: {
    alignItems: "center",
    width: "100%",
    gap: Spacing.lg
  },

  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.xxl,
    marginHorizontal: "auto",
    gap: Spacing.xl,
    alignItems: "center",
  },

  content: {
    alignItems: "center",
    flex: 1,
    alignSelf: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  error: {
    textAlign: "center",
    color: "red",
    fontFamily: "Helvetica-Now-Display-Medium",
    fontSize: 14,
    marginTop: Spacing.sm
  },

  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: Spacing.md,
    width: "100%",
  },

  button: {
    width: "100%",
    backgroundColor: "#1e3a8a",
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Helvetica-Now-Display-Regular",
  },

  resendText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 16,
    color: "#1e3a8a",
    textAlign: "center",
  },
});
