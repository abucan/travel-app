import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 16,
        display: 'flex',
        flexDirection: 'row'
    },

    btn: {
        width: '100%',
        backgroundColor: Colors.light.background,
        paddingVertical: 14,
        borderRadius: 12,

        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#CFCFCF',
        flex: 1,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Helvetica-Now-Display-Medium'
    },

    icon: {
        marginRight: 8
    }
})