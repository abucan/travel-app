import { StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.light.background,
        height: "100%",
      },

      container: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.xxl,
        marginHorizontal: "auto",
        gap: Spacing.xl,
        alignItems: "center",
      },

      content: {
        alignItems: "center",
        flex: 1,
        alignSelf: "center",
        justifyContent: "space-between",
        width: "100%",
      },

      footer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: Spacing.md,
        width: "100%",
      },

      modalContent: {
        alignItems: "center",
        width: "100%",
        gap: Spacing.lg
      },
})