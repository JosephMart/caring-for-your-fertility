import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import localization from 'moment/locale/es-us';
import { Link } from 'react-router-dom';

import { ENGLISH, SPANISH } from '../constants';

const TEXT = {
    [ENGLISH]: {
        more: 'more details',
    },
    [SPANISH]: {
        more: 'mas',
    }
}
export default class UpcomingEvent extends PureComponent {
    static propTypes = {
        language: PropTypes.string,
    }

    static defaultProps = {
        language: ENGLISH,
    }

    render() {
        const { event, language } = this.props;
        const text = TEXT[language];
        const region = language === ENGLISH ? 'en' : 'es';
        return (
            <div className="feature">
                <div className="details_exp">
                    <h3>{event.title}</h3>
                    <p>{event.location.name}</p>
                    <p>{`${event.startTime}-${event.endTime}`}</p>
                    <p>{moment(event.date).locale(region, localization).format('LL')}</p>
                    <Link to={event.link}>{text.more}<span>→</span></Link>
                </div>
            </div>
        );
    }
}
