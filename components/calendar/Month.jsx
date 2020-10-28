import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Day from './Day';

const Days = (props) => (
    <View style={styles.daysList}>
        {props.days}
    </View>
);

const MonthTitle = (props) => (
    <View style={styles.monthTitle}>
        <Text style={{ fontSize: 24, paddingLeft: props.titleShift + "%"}}>
            {props.month}
        </Text>
    </View>
    
);

class Month extends React.Component {
    state = {
        titleShift: 0,
        days: []
    }

    componentDidMount() {
        this.renderDays(this.props);
    }

    renderDays = (props) => {
        let days = [];
        let titleShift = 0;
        let daysInMonth = 0; 
        let date = new Date(
            props.date.getFullYear(),
            props.index
        );

        daysInMonth = new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate();

        for (let i = 1; i <= 42; i++) {
            let empty = false;
            let today = false;
            let day = i - date.getDay();

            // Checks if days belong to other months
            if (day <= 0 || day > daysInMonth) {
                empty = true;
            };

            // Checks if day matches current day
            if (props.date.getDate() === day && props.date.getMonth() === date.getMonth()) {
                today = true;
            };

            // Adds all days minus bottom 7 if all empty
            if ((!empty && day < 32) || (empty && day < 7)) {
                if (empty && i < 7) {
                    titleShift += 100 / 7;
                }
                days.push(
                    <Day empty={empty} today={today} day={day} key={i} />
                );
            }
        };

        this.setState({
            days: days,
            titleShift: titleShift
        })
    }

    render() {
        return (
            <View style={styles.month}>
                <MonthTitle month={this.props.month} titleShift={this.state.titleShift} />
                <Days days={this.state.days} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    month: {
        paddingTop: 16,
        paddingBottom: 8
    },
    daysList: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    monthTitle: {
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.4)",
        height: 32,
        margin: 8
    }
})

export default Month;