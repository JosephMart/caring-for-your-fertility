import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CalendarEvent from './CalendarEvent';

export default class CalendarCell extends PureComponent {
    static propTypes = {
        num: PropTypes.number.isRequired,
        otherMonth: PropTypes.bool.isRequired,
        events: PropTypes.shape()
    }

    render() {
        return (
            <li className={classNames({
                day: true,
                otherMonth: this.props.otherMonth
            })}>
                <div className="date">{this.props.num}</div>
                <CalendarEvent event={this.props.event} />
            </li>
        );
    }
}
