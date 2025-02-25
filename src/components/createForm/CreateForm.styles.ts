import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageUploadContainer: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    marginBottom: 16,
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  placeholderContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#e0e0e0",
    borderStyle: "dashed",
    borderRadius: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: "#666",
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

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  icon: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  iconWrapper: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  formWrapper: {
    marginTop: 16,
    paddingHorizontal: 20,
    gap: 16,
  },
});
