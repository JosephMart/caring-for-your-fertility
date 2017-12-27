import React, { PureComponent } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class UpcomingEvent extends PureComponent {
    render() {
        const { event } = this.props;
        return (
            <div className="feature">
                <div className="details_exp">
                    <h3>{event.title}</h3>
                    <p>{event.location.name}</p>
                    <p>{`${event.startTime}-${event.endTime}`}</p>
                    <p>{moment(event.date).format('MMMM D, YYYY')}</p>
                    <Link to={event.link}>more details<span>→</span></Link>
                </div>
            </div>
        );
    }
}
