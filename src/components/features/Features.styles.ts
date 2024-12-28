import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    featureItemWrapper: {
        gap: 8,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    feature: {
        width: 60,
        height: 60,
        display: 'flex',
        borderRadius: 100,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    featureText: {
        fontSize: 12,
        color: 'gray',
        fontFamily: 'Helvetica-Now-Display-Regular',
    }
})