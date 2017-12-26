import { GET_EVENTS_BY_MONTH } from "../constants";

const INITIAL_STATE = {
    '2017-12-31': {
        title: 'First Event',
        shortDesc: 'the short first event',
        longDesc: 'the longer version of the overview',
        startTime: '6:00 PM',
        endTime: '8:00 PM',
        location: {
            name: 'St. Vincent',
            coord: { lat: 29.7051917, lng: -95.42852169999998 }
        },
        link: 'event/2017/12/31'
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
