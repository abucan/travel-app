import { StyleSheet } from "react-native";
import { Colors } from "@/src/constants/Colors";

export const styles = StyleSheet.create({
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
      dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
      },
      
      activeDot: {
        backgroundColor: Colors.light.brand
      },
})