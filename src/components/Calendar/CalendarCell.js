import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class CalendarCell extends PureComponent {
    static propTypes = {
        num: PropTypes.number.isRequired,
        otherMonth: PropTypes.bool.isRequired
    }

    render() {
        return (
            <li className={classNames({
                day: true,
                otherMonth: this.props.otherMonth
            })}>
                <div className="date">{this.props.num}</div>
                <div className="event">
                    <div className="event-desc">
                        HTML 5 lecture with Brad Traversy from Eduonix
    						</div>
                    <div className="event-time">
                        1:00pm to 3:00pm
    						</div>
                </div>
            </li>
        );
    }
}
