import { GET_EVENTS_BY_MONTH, ST_VINCENT_DE_PAUL, HOLY_ROSARY, ST_ELIZABETH_ANN_SETON, ST_LUKE_THE_EVANGELIST } from "../constants";
import { getEventTitle } from '../utils';

const INITIAL_STATE = {
    '2018-01-10': {
        title: 'Introductory Session',
        shortDesc: '',
        longDesc: '',
        startTime: '6:00 PM',
        endTime: '7:30 PM',
        location: HOLY_ROSARY,
        link: 'event/2018/01/10'
    },
    '2018-01-16': {
        title: 'Sesión de Introducción',
        shortDesc: 'Sesión de Introducción',
        longDesc: '',
        startTime: '7:00 PM',
        endTime: '8:30 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/01/16'
    },
    '2018-01-19': {
        title: 'Introductory Session',
        shortDesc: '',
        longDesc: '',
        startTime: '7:00 PM',
        endTime: '8:30 PM',
        location: ST_ELIZABETH_ANN_SETON,
        link: 'event/2018/01/19'
    },
    '2018-02-13': {
        title: 'Sesión de Introducción',
        shortDesc: '',
        longDesc: '',
        startTime: '6:00 PM',
        endTime: '7:30 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/02/13'
    },
    '2018-02-02': {
        title: 'Introductory Session',
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:30 PM',
        location: ST_LUKE_THE_EVANGELIST,
        link: 'event/2018/02/02'
    },
    '2018-03-09': {
        title: 'Introductory Session',
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_ELIZABETH_ANN_SETON,
        link: 'event/2018/03/09'
    },
    '2018-03-12': {
        title: 'Sesión de Introducción',
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/03/12'
    },
    '2018-04-09': {
        title: 'Sesión de Introducción',
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/04/09'
    },
    '2018-05-07': {
        title: 'Sesión de Introducción',
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/05/07'
    },
    '2018-03-14': {
        title: 'Introductory Session',
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: HOLY_ROSARY,
        link: 'event/2018/03/14'
    },
    '2018-04-11': {
        title: 'Introductory Session',
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: HOLY_ROSARY,
        link: 'event/2018/04/11'
    },
    '2018-05-09': {
        title: 'Introductory Session',
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: HOLY_ROSARY,
        link: 'event/2018/05/09'
    },
    '2018-06-06': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: HOLY_ROSARY,
        link: 'event/2018/06/06'
    },
    // Savannnah start
    '2018-08-08': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: HOLY_ROSARY,
        link: 'event/2018/08/08'
    },
    '2018-09-12': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: HOLY_ROSARY,
        link: 'event/2018/09/12'
    },
    '2018-10-10': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: HOLY_ROSARY,
        link: 'event/2018/10/10'
    },
    '2018-11-07': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: HOLY_ROSARY,
        link: 'event/2018/11/07'
    },
    '2018-12-12': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: HOLY_ROSARY,
        link: 'event/2018/12/12'
    },
    '2018-06-15': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/06/15'
    },
    '2018-08-02': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/08/02'
    },
    '2018-09-07': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/09/07'
    },
    '2018-10-05': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/10/05'
    },
    '2018-11-02': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/11/02'
    },
    '2018-12-07': {
        title: getEventTitle('eng/esl'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_VINCENT_DE_PAUL,
        link: 'event/2018/12/07'
    },
    '2018-06-07': {
        title: getEventTitle('eng'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_ELIZABETH_ANN_SETON,
        link: 'event/2018/06/07'
    },
    '2018-08-09': {
        title: getEventTitle('eng'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_ELIZABETH_ANN_SETON,
        link: 'event/2018/08/09'
    },
    '2018-09-13': {
        title: getEventTitle('eng'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_ELIZABETH_ANN_SETON,
        link: 'event/2018/09/13'
    },
    '2018-10-11': {
        title: getEventTitle('eng'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_ELIZABETH_ANN_SETON,
        link: 'event/2018/10/11'
    },
    '2018-11-08': {
        title: getEventTitle('eng'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_ELIZABETH_ANN_SETON,
        link: 'event/2018/11/08'
    },
    '2018-12-13': {
        title: getEventTitle('eng'),
        shortDesc: '',
        longDesc: '',
        startTime: '6:30 PM',
        endTime: '8:00 PM',
        location: ST_ELIZABETH_ANN_SETON,
        link: 'event/2018/12/13'
    },
};

const events = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_EVENTS_BY_MONTH:
        default:
            return state
    }
}

export default events;
