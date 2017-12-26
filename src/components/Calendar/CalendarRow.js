import React, { PureComponent } from 'react';
import CalendarCell from './CalendarCell';
import PropTypes from 'prop-types';

export default class CalendarRow extends PureComponent {
    static propTypes = {
        days: PropTypes.arrayOf(PropTypes.shape({
            num: PropTypes.number.isRequired,
            otherMonth: PropTypes.bool.isRequired
        })).isRequired,
        events: PropTypes.shape()
    }

    render() {
        return (
            <ul className="days">
                {this.props.days.map(i => <CalendarCell key={i.num} {...i} event={this.props.events[i.otherMonth ? 'otherMonth' : 'currentMonth'][i.num]} />)}
            </ul>
        );
    }
}
