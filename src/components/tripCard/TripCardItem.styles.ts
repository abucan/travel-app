import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  wrapper: {
    width: width,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginHorizontal: "auto",
    paddingHorizontal: 20,
  },

  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 18,
    borderCurve: "continuous",
    boxShadow: "0px 0px 20px -10px rgba(0, 0, 0, 0.16)",
  },

  imageWrapper: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: 300,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderCurve: "continuous",
    objectFit: "fill"
  },

  imageLabel: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    top: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 50,
    borderCurve: "continuous",
  },

  cardFooter: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    padding: 12,
    gap: 24,
  },

  cardFooterInfo: {
    gap: 8,
    display: "flex",
    flexDirection: "column",
  },

  cardFooterTitle: {
    fontFamily: "Helvetica-Now-Display-Bold",
    fontSize: 18,
  },

  cardFooterDistinct: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
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
