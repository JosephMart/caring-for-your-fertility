import React, { PureComponent } from 'react';
import CalendarCell from './CalendarCell';
import PropTypes from 'prop-types';

export default class CalendarRow extends PureComponent {
    static propTypes = {
        days: PropTypes.arrayOf(PropTypes.shape({
            num: PropTypes.number,
            otherMonth: PropTypes.bool
        })).isRequired
    }

    render() {
        return (
            <ul className="days">
                {this.props.days.map(i => <CalendarCell key={i.num} {...i} />)}
            </ul>
        );
    }
}
