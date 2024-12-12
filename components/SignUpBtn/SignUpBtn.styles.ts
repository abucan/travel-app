import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 16
    },

    googleBtn: {
        width: '100%',
        backgroundColor: '#4285F4',
        padding: 12,
        borderRadius: 12,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Helvetica-Now-Display-Regular'
    },

    appleBtn: {
        backgroundColor: '#000',
    },

    icon: {
        marginRight: 8
    }
})