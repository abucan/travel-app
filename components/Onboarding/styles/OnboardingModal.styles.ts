import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bottomSheetView: {
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        gap: 16
    },

    button: {
        width: '100%',
        backgroundColor: "#1e3a8a",
        paddingVertical: 14,
        borderRadius: 12
    },

    outlineBtn: {
        backgroundColor: '#FDF6E6',
        borderColor: '#1e3a8a',
        borderWidth: StyleSheet.hairlineWidth,
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Helvetica-Now-Display-Regular'
    }
})