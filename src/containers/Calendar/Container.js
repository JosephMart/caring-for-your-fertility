import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CalendarNav, CalendarBox } from '../../components/Calendar'
import { connect } from 'react-redux';
import './Calendar.css'
import { changeMonth } from '../../actions/index';
import { getCalendarNums, getEventsByMonth } from '../../utils';

class Calendar extends Component {
    static propTypes = {
        calendar: PropTypes.shape().isRequired,
        events: PropTypes.shape()
    }

    constructor(props) {
        super(props);

        this.changeMonth = (e, incrementVal) => {
            e.preventDefault();
            this.props.dispatch(changeMonth(incrementVal));
        }
    }

    render() {
        const { calendar, monthEvents } = this.props;
        console.log(monthEvents);
        return (
            <div id="calendar-wrap" className="wrapper">
                <CalendarNav month={calendar.selectedMonth}
                    year={calendar.selectedYear}
                    changeMonth={this.changeMonth}
                />
                <CalendarBox rows={getCalendarNums(calendar)}
                    events={monthEvents} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { calendar, events } = state;
    return {
        calendar,
        monthEvents: getEventsByMonth(events, calendar.selectedYear, parseInt(calendar.currentMoment.format('MM'), 10))
    };
}

export default connect(mapStateToProps)(Calendar);
