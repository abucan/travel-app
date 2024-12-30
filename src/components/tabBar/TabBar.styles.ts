import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 20,
        padding: 15,
        borderRadius: 16,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 10,
        shadowOpacity: 0.1
    },

    tabBarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    }
});