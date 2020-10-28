import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Day extends React.Component {
    state = {
        backgroundColor: this.props.empty ? "rgba(0,0,0,0)" : this.props.today ? "rgba(255,0,0,0.6)" : "rgba(0,0,0,0.4)",
        borderColor: this.props.empty ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.4)"
    }

    render() {
        return (
            <View style={[
                styles.day,
                { backgroundColor: this.state.backgroundColor, borderColor: this.state.borderColor }
            ]} >
                <Text style={styles.dayNumber}>
                    {this.props.empty ? '' : this.props.day}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    day: {
        width: 100 / 7 + "%",
        height: 60,
        overflow: "hidden",
        borderWidth: 1,
    },
    dayNumber: {
        position: "relative",
        fontSize: 24,
        fontWeight: "bold",
        color: "rgba(255,255,255,0.9)",
        left: -4,
        top: -8,
    }
});

export default Day;