import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  featureItemWrapper: {
    gap: 8,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  feature: {
    display: "flex",
    borderRadius: 18,
    padding: 12,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 20px -10px rgba(0, 0, 0, 0.16)",
  },

  featureText: {
    fontSize: 12,
    color: "gray",
    fontFamily: "Helvetica-Now-Display-Regular",
  },
});
