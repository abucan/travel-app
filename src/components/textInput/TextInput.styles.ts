import { Spacing } from "@/src/constants/Spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: Spacing.xs
    },

    label: {
        fontFamily: 'Helvetica-Now-Display-Bold',
        fontSize: 16,
    },

    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 12,
        borderColor: '#CFCFCF',
    },

    input: {
        flex: 1,
        fontSize: 14,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.xs
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