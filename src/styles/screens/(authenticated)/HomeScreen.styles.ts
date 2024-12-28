import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: "100%",
        backgroundColor: 'whitesmoke',
    },

    container: {
        flex: 1,
        position: "relative",
    },

    imageWrapper: {
        height: 500,
        overflow: 'hidden',
        position: 'relative',
    },

    image: {
        width: "100%",
        height: 500,
        transform: [{ scale: 1 }],
    },

    logo: {
        position: 'absolute',
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        bottom: '50%',
        left: 0,
        right: 0,
    },

    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})