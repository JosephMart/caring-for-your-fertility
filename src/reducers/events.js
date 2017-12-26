import { GET_EVENTS_BY_MONTH, ST_VINCENT_DE_PAUL, HOLY_ROSARY, ST_ELIZABETH_ANN_SETON, ST_LUKE_THE_EVANGELIST } from "../constants";

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
    }
};

const events = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_EVENTS_BY_MONTH:
        default:
            return state
    }
}

export default events;
