import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
    height: "100%",
  },

  container: {
    width: "90%",
    marginHorizontal: "auto",
    flex: 1,
    justifyContent: "space-between",
  },

  formContainer: {
    gap: 24
  },

  alternativeContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },

  alternativeText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
  },

  signText: {
    fontFamily: "Helvetica-Now-Display-Bold",
    fontSize: 16,
    color: "#1e3a8a",
    textDecorationLine: "underline",
  },

  forgotPasswordText: {
    fontFamily: "Helvetica-Now-Display-Medium",
    fontSize: 14,
    color: "#1e3a8a",
    textAlign: "right",
  },
});
