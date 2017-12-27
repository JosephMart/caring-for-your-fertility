import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CalendarEvent extends PureComponent {
    static propTypes = {
        event: PropTypes.shape()
    }

    render() {
        const { event } = this.props;
        if (event) {
            return (
                <Link className="event" to={event.link}>
                    <div className="event-desc">
                        {event.title}<br /><br />
                        {event.location.name}
                    </div>
                    <div className="event-time">
                        {`${event.startTime} to ${event.endTime}`}
                    </div>
                </Link>
            );
        }
        return null;
    }
}