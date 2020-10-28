import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from '../../Styles';
import Month from './Month';

const CalendarNavButton = (props) => (
    <div onClick={props.handleClick} className="calendarNavButton">
        {props.icon}
    </div>
);

const CalendarNav = (props) => (
    <View style={styles.calendarTitle}>
        {/* <CalendarNavButton handleClick={props.subYear} icon={<DoubleLeftArrow/>} />
        <CalendarNavButton handleClick={props.subMonth} icon={<LeftArrow />} />
        <div className="calendarDate flexCenter">
            <h1 className="calendarMonth">
                {props.monthNames[props.date.getMonth()]}
            </h1>
            <h1 className="calendarYear">
                {props.date.getFullYear()}
            </h1>
        </div>
        <CalendarNavButton handleClick={props.addMonth} icon={<RightArrow />} />
        <CalendarNavButton handleClick={props.addYear} icon={<DoubleRightArrow />} /> */}
    </View>
);

const FeatureNav = (props) => (
    <View style={styles.featureNav}>

    </View>
);

const Days = (props) => (
    <View style={styles.dayTitles}>
        {
            props.days.map((day, i) =>  <Text key={day + i} style={styles.dayTitle}>{day}</Text> )
        }
    </View>
);

class Calendar extends React.Component {
    state = {
        feature: "Calendar",
        date: new Date(),
        days: [
            "S", "M", "T", "W", "T", "F", "S"
        ],
        months: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]
    }

    render() {
        // let date, days, months = this.state;
        return (
            <View>
                <Days days={this.state.days}/>
                <ScrollView>
                    {
                        this.state.months.map((month, index) =>
                            <Month
                                date={this.state.date}
                                key={month}
                                index={index}
                                month={month}
                            />
                        )
                    }
                </ScrollView>
                <FeatureNav feature={this.state.feature} />
            </View>
        );
    }
};

export default Calendar;