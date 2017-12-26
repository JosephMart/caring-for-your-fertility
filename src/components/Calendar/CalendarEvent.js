import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CalendarEvent extends PureComponent {
    static propTypes = {
        event: PropTypes.shape()
    }

    render() {
        const { event } = this.props;
        if (event) {
            return (
                <a className="event" href={event.link}>
                    <div className="event-desc">
                        {event.shortDesc}
                    </div>
                    <div className="event-time">
                        {`${event.startTime} to ${event.endTime}`}
                    </div>
                </a>
            );
        }
        return null;
    }
}