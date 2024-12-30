import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    width: "100%",
  },

  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
  },

  tabBarItemActive: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    flexDirection: "row",
    backgroundColor: Colors.light.brand,
    borderRadius: 24,
    borderCurve: "continuous",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
});
