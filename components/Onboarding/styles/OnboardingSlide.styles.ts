import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 24,
        paddingHorizontal: 22
    },

    image: {
        flex: 0.6
    },

    textContainer: {
        alignItems: 'center',
        gap: 4,
        flex: 0.4
    },

    headerText: {
        fontFamily: 'Helvetica-Now-Display-Bold',
        fontSize: 30,
        textAlign: 'center'
    },

    descriptionText: {
        fontFamily: 'Helvetica-Now-Display-Regular',
        fontSize: 18,
        textAlign: 'center',
        color: '#4b5563',
        // lineHeight: 24
    }
})