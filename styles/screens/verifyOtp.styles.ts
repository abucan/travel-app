import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: Colors.light.background,
        height: '100%',
    },

    modalContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        borderRadius: 12,
        padding: 20,
        marginHorizontal: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.light.background
    },

    body: {
        alignItems: 'center',
        gap: 32
    },

    iconOuterCircle: {
        backgroundColor: 'rgba(30, 58, 138, 0.2)',
        width: 124,
        height: 124,
        borderRadius: 99,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    iconInnerCircle: {
        backgroundColor: 'rgba(30, 58, 138, 1)',
        width: 84,
        height: 84,
        borderRadius: 99,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        padding: 20,
        marginHorizontal: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24
    },

    textContainer: {
        width: '100%',
        marginHorizontal: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    title: {
        fontFamily: 'Helvetica-Now-Display-Bold',
        fontSize: 28,
    },

    description: {
        fontFamily: 'Helvetica-Now-Display-Regular',
        fontSize: 18,
        textAlign: 'center',
        color: '#6b7280'
    },

    errorMsg: {
        fontFamily: 'Helvetica-Now-Display-Regular',
        fontSize: 14,
        color: 'red',
        textAlign: 'center'
    },

    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16
    },

    button: {
        width: '100%',
        backgroundColor: "#1e3a8a",
        paddingVertical: 14,
        borderRadius: 12
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Helvetica-Now-Display-Regular'
    },

    resendBtnText: {
        fontFamily: 'Helvetica-Now-Display-Regular',
        fontSize: 16,
        color: '#1e3a8a',
        textAlign: 'center'
    }
});