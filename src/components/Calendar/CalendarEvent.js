import React, { PureComponent } from 'react';

export default class CalendarEvent extends PureComponent {
    static propTypes = {

    }

    render() {
        return (
            <div className="event">
                <div className="event-desc">
                    HTML 5 lecture with Brad Traversy from Eduonix
                </div>
                <div className="event-time">
                    1:00pm to 3:00pm
                </div>
            </div>
        );
    }
}