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

  logo: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    left: 0,
    right: 0,
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  featureItemWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  feature: {
    display: "flex",
    borderRadius: 12,
    padding: 8,  
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 20px -10px rgba(0, 0, 0, 0.16)",
  },
});
