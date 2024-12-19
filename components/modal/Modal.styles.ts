import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    margin: 5,
    justifyContent: "flex-end",
    animationName: "slideInUp",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    borderRadius: 12,
    padding: 20,
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.background,
  },
});
