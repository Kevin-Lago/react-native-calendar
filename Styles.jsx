import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    // App
    screen: {
        position: "absolute",
        height: Dimensions.get("window").height,
        backgroundColor: "rgba(0,255,255,0.8)"
    },
    content: {
        height: Dimensions.get('window').height - 72,
        paddingBottom: 80,
        zIndex: 1
    },
    appNav: {
        height: 80,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255,255,255,0.6)"
    },
    title: {
        color: "white",
        fontSize: 30,
        padding: 8
    },
    featureNav: {
        backgroundColor: "rgba(0,0,0,0.6)",
        height: 88,
        borderTopWidth: 1,
        borderTopColor: "rgba(255,255,255,0.6)"
    },

    // Calendar
    dayTitles: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: 24,
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center"
    },
    dayTitle: {
        textAlign: "center",
        color: "white",
        width: 100 / 7 + "%"
    }
});

export default styles;