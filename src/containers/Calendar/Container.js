import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CalendarNav, CalendarBox } from '../../components/Calendar'
import { connect } from 'react-redux';
import './Calendar.css'
import { changeMonth } from '../../actions/index';
import { getCalendarNums } from '../../utils';

class Calendar extends Component {
    static propTypes = {
        calendar: PropTypes.shape().isRequired
    }

    constructor(props) {
        super(props);

        this.changeMonth = (e, incrementVal) => {
            e.preventDefault();
            this.props.dispatch(changeMonth(incrementVal));
        }
    }

    render() {
        const { calendar } = this.props;
        return (
            <div id="calendar-wrap" className="wrapper calendar">
                <CalendarNav month={calendar.selectedMonth}
                    year={calendar.selectedYear}
                    changeMonth={this.changeMonth}
                />
                <CalendarBox rows={getCalendarNums(calendar)} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        calendar: state.calendar
    };
}

export default connect(mapStateToProps)(Calendar);
