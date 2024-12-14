import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 5
    },

    textLabel: {
        fontFamily: 'Helvetica-Now-Display-Bold',
        fontSize: 16,
    },

    textInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 12,
        borderColor: '#CFCFCF',
        padding: 4
    },

    textInput: {
        flex: 1,
        fontSize: 14,
    },

    icon: {
        marginHorizontal: 10,
        color: 'grey'
    },

    errorText: {
        color: 'red',
        fontSize: 12,
    }
})