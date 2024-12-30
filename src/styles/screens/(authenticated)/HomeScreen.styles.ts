import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: "100%",
    backgroundColor: "whitesmoke",
  },

  container: {
    flex: 1,
    position: "relative",
  },

  imageWrapper: {
    height: 500,
    overflow: "hidden",
    position: "relative",
  },

  image: {
    width: "100%",
    height: 500,
    transform: [{ scale: 1 }],
  },

  logo: {
    position: "absolute",
    display: "flex",
    width: "100%",
    alignItems: "center",
    bottom: "50%",
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

  wrapper1: {
    marginTop: 20,
    backgroundColor: "white",
    width: "90%",
    height: "auto",
    overflow: "hidden",
    marginHorizontal: "auto",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 16,
    borderCurve: "continuous",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
    paddingHorizontal: 20,
  },

  image1: {
    width: "100%",
    height: 300,
    // marginVertical: 20,
    borderRadius: 20,
    borderCurve: "continuous",
    marginHorizontal: "auto",
  },

  imageWrapper1: {
    position: "relative",
    overflow: "hidden",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",

    marginVertical: 20,
    marginHorizontal: "auto",
    borderRadius: 20,
    borderCurve: "continuous",
  },

  imageFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    width: "100%",
    display: "flex",
    height: 90,
    opacity: 0.7,
    borderRadius: 20,
    borderCurve: "continuous",
  },
});
