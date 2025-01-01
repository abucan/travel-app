import { StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: "100%",
    backgroundColor: Colors.light.background,
  },

  container: {
    flex: 1,
    position: "relative",
  },

  imageWrapper: {
    height: 250,
    overflow: "hidden",
    position: "relative",
  },

  image: {
    width: "100%",
    height: 250,
    transform: [{ scale: 1 }],
  },

  logo: {
    position: "absolute",
    display: "flex",
    width: "100%",
    alignItems: "center",
    top: "50%",
    left: 0,
    right: 0,
    transform: [{ translateY: -37.5 }],
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
