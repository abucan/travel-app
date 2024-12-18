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

  skipBtn: {
    position: "absolute",
    width: "95%",
    marginHorizontal: "auto",
    marginTop: 5,
  },

  skipBtnText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 18,
    color: "#6b7280",
    textAlign: "right",
  },

  sliderBtnContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    marginHorizontal: "auto",
    paddingVertical: 32,
  },

  backBtnText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 18,
    color: "#6b7280",
  },

  nextBtn: {
    backgroundColor: "#1e3a8a",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 36,
  },

  nextBtnText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 16,
    color: "#fff",
  },
});
