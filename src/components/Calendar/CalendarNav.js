import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CalendarNav extends PureComponent {
    static propTypes = {
        month: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        changeMonth: PropTypes.func.isRequired,
    }

    render() {
        const { month, year, changeMonth } = this.props;

        return (
            <div className="calendar-action" style={{ textAlign: 'center' }}>
                <a href="" onClick={(e) => changeMonth(e, -1)}>
                    <span className="left"></span>
                </a>
                <h2>{`${month} ${year}`}</h2>
                <a href="" onClick={(e) => changeMonth(e, 1)}>
                    <span className="right"></span>
                </a>
            </div>
        )
    }
}
