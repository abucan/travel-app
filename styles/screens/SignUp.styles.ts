import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#FDF6E6',
        height: '100%',
    },

    scrollContainer: {
        flex: 1,
        width: '90%',
        marginHorizontal: 'auto',
    },

    container: {
        width: '100%',
        marginHorizontal: 'auto',
        gap: 24
    },

    textContainer: {
        width: '100%',
        marginHorizontal: 'auto',
        marginTop: 32,
    },

    headerText: {
        fontFamily: 'Helvetica-Now-Display-Bold',
        fontSize: 26,
    },

    descriptionText: {
        fontFamily: 'Helvetica-Now-Display-Regular',
        fontSize: 18,
        color: '#6b7280',
    },

    alternativeContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
    },

    button: {
        width: '100%',
        backgroundColor: '#1e3a8a',
        paddingVertical: 14,
        borderRadius: 12
    },

    buttonText: {
        fontFamily: 'Helvetica-Now-Display-Regular',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },

    alternativeText: {
        fontFamily: 'Helvetica-Now-Display-Regular',
        fontSize: 16,
        color: '#6b7280',
        textAlign: 'center'
    },

    signText: {
        fontFamily: 'Helvetica-Now-Display-Bold',
        fontSize: 16,
        color: '#1e3a8a',
    },
    
    forgotPasswordText: {
        fontFamily: 'Helvetica-Now-Display-Medium',
        fontSize: 14,
        color: '#1e3a8a',
        textAlign: 'right'
    }
})