import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  container: {
    flex: 1,
    position: "relative",
  },

  sliderBtnContainer: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    marginHorizontal: "auto",
    paddingVertical: 32,
    gap: 16,
  },

  backBtnText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 18,
    color: "#6b7280",
    width: "100%",
    textAlign: 'center'
  },
});
