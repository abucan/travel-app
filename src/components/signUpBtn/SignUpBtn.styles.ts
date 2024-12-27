import { Colors } from "@/src/constants/Colors";
import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        gap: Spacing.md,
        display: 'flex',
        flexDirection: 'row'
    },

    button: {
        width: '100%',
        backgroundColor: Colors.light.background,
        paddingVertical: Spacing.md,
        borderRadius: 12,

        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#CFCFCF',
        flex: 1,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Helvetica-Now-Display-Medium'
    },

    icon: {
        marginRight: 8
    }
})