import moment from 'moment';
import localization from 'moment/locale/es-us';
import { CHANGE_MONTH, CHANGE_LANGUAGE } from '../constants';

const now = moment(new Date());

const INITIAL_STATE = {
    currentMoment: now.locale('en', localization),
    firstDayIndex: parseInt(now.startOf('month').format('d'), 10),
    daysInCurrentMonth: now.daysInMonth(),
    daysInPrevMonth: moment(now).subtract(1, 'months').daysInMonth(),
    selectedMonth: now.format('MMMM'),
    selectedYear: parseInt(now.format('YYYY'), 10)
};

const calendar = (state = INITIAL_STATE, action) => {
    const { currentMoment } = state;

    switch (action.type) {
        case CHANGE_MONTH:
            currentMoment.add(action.incrementVal, 'months');
            return Object.assign({}, ...state, {
                currentMoment,
                firstDayIndex: parseInt(currentMoment.startOf('month').format('d'), 10),
                daysInCurrentMonth: currentMoment.daysInMonth(),
                daysInPrevMonth: moment(currentMoment).subtract(1, 'months').daysInMonth(),
                selectedMonth: currentMoment.format('MMMM'),
                selectedYear: parseInt(currentMoment.format('YYYY'), 10)
            });
        case CHANGE_LANGUAGE:
            return state;
        default:
            return state;
    }
}

export default calendar;
