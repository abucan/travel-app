import { StyleSheet } from "react-native";
import { Spacing } from "@/src/constants/Spacing";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },

  container: {
    backgroundColor: "white",
    height: 70,
    marginHorizontal: Spacing.lg,
    borderRadius: 18,
    borderCurve: "continuous",
    marginTop: -30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "0px 0px 20px -10px rgba(0, 0, 0, 0.16)",
  },

  searchContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  icon: {
    marginHorizontal: Spacing.md,
    color: "gray",
    opacity: 0.8,
  },

  whereText: {
    fontFamily: "Helvetica-Now-Display-Bold",
    fontSize: 18,
    color: "black",
  },

  description: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: Spacing.sm,
  },

  descriptionText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 14,
    color: "gray",
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "gray",
    opacity: 0.5,
  },
});
