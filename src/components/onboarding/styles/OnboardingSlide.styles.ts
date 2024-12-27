import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Spacing.xxl,
    width: "100%",
    marginHorizontal: "auto",
    paddingHorizontal: 20,
    paddingTop: height * 0.04,
  },

  imageWrapper: {
    flex: 0.6,
  },

  content: {
    alignItems: "center",
    gap: Spacing.xs,
    flex: 0.4,
  },

  title: {
    fontFamily: "Helvetica-Now-Display-Bold",
    fontSize: 28,
    textAlign: "center",
    lineHeight: 36,
  },

  description: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 18,
    textAlign: "center",
    color: "#4b5563",
    lineHeight: 24,
  },
});
