import React, { PureComponent } from 'react';
import CalendarRow from './CalendarRow';
import PropTypes from 'prop-types';

export default class CalendarBox extends PureComponent {
    static propTypes = {
        rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
            num: PropTypes.number.isRequired,
            otherMonth: PropTypes.bool.isRequired
        }))),
        events: PropTypes.shape()
    }

    render() {
        return (
            <div id="calendar">
                <ul className="weekdays">
                    <li>Sunday</li>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                </ul>
                {this.props.rows.map((row, i) => <CalendarRow days={row} key={i} events={this.props.events} />)}
            </div>
        );
    }
}
