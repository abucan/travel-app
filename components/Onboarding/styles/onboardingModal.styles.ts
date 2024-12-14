import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
    bottomSheetView: {
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
    },

    buttonContainer: {
        width: '100%',
        gap: 16,
    }
})