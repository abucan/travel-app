import { StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Colors.light.brand,
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
    fontFamily: "Helvetica-Now-Display-Medium",
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },

  linkButton: {
    width: "100%",
    backgroundColor: "#1e3a8a",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#1e3a8a",
    paddingVertical: 14,
    borderRadius: 12,
  },

  // add disabled styles
  disabledButton: {
    backgroundColor: "#ccc",
  },

  disabledButtonText: {
    color: "#666",
  },
});
