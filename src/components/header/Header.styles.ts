import { StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 24,
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
})