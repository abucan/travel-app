import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: '#FDF6E6',
        height: '100%',
    },

    container: {
        flex: 1,
        position: 'relative'
    },

    skipBtn: {
        position: 'absolute',
        width: '95%',
        marginHorizontal: 'auto',
        justifyContent: 'center',
        marginTop: 16,
    },

    skipBtnText: {
        fontFamily: 'Helvetica-Now-Display-Regular',
        fontSize: 16,
        color: '#6b7280',
        textAlign: 'right'
    },

    sliderBtnContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: 'auto',
        paddingVertical: 32
    },

    backBtnText: {
        fontFamily: 'Helvetica-Now-Display-Regular',
        fontSize: 16,
        color: '#6b7280',
    },

    nextBtn: {
        backgroundColor: '#1e3a8a',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 24
    },

    nextBtnText: {
        fontFamily: 'Helvetica-Now-Display-Regular',
        fontSize: 16,
        color: '#fff',
    },
})