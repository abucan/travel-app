import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 24,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginHorizontal: "auto",
    paddingHorizontal: 20,
    gap: 16,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    borderRadius: 18,
    borderCurve: "continuous",
    boxShadow: "0px 0px 20px -10px rgba(0, 0, 0, 0.16)",
  },

  image1: {
    width: "100%",
    height: 300,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderCurve: "continuous",
    marginHorizontal: "auto",
  },

  imageWrapper1: {
    display: "flex",
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },

  cardFooter: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 12,
    overflow: "hidden",
    gap: 24,
  },

  sectionTitle: {
    fontFamily: "Helvetica-Now-Display-Bold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },

  seeAll: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  seeAllText: {
    fontFamily: "Helvetica-Now-Display-Bold",
    fontSize: 14,
    color: Colors.light.link,
    display: "flex",
  },

  icon: {
    color: Colors.light.link,
  },

  cardFooterText: {
    gap: 8,
    display: "flex",
    flexDirection: "column",
  },

  cardFooterTitle: {
    fontFamily: "Helvetica-Now-Display-Bold",
    fontSize: 18,
  },

  cardFooterDate: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
  },

  cardFooterPriceText: {
    fontFamily: "Helvetica-Now-Display-Bold",
    fontSize: 24,
  },

  cardFooterPersonText: {
    fontFamily: "Helvetica-Now-Display-Regular",
    fontSize: 14,
  },
});
