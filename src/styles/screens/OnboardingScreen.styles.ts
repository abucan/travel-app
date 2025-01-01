import { StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  container: {
    flex: 1,
    position: "relative",
  },

  footer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginHorizontal: "auto",
    paddingVertical: Spacing.xxl,
    paddingHorizontal: Spacing.lg,
    gap: Spacing.md,
  },

  skipText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 16,
    color: "#6b7280",
    width: "100%",
    textAlign: 'center'
  },

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },

  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: Colors.light.brand,
  },
  
});
