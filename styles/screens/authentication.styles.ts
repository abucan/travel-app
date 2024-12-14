import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
    height: "100%",
  },

  scrollContainer: {
    flex: 1,
    width: "100%",
    marginHorizontal: "auto",
  },

  container: {
    width: "90%",
    gap: 24,
    marginTop: 32,
    marginHorizontal: "auto",
  },

  textContainer: {
    width: "100%",
  },

  headerText: {
    fontFamily: "Helvetica-Now-Display-Bold",
    fontSize: 26,
    // textAlign: "center",
  },

  descriptionText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 18,
    color: "#6b7280",
    // textAlign: "center",
  },

  alternativeContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },

  button: {
    width: "100%",
    backgroundColor: "#1e3a8a",
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
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
  },

  forgotPasswordText: {
    fontFamily: "Helvetica-Now-Display-Medium",
    fontSize: 14,
    color: "#1e3a8a",
    textAlign: "right",
  },
});
