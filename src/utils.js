import moment from 'moment';

export const getCalendarNums = ({ firstDayIndex = -1, daysInCurrentMonth = -1, daysInPrevMonth = -1 } = {}) => {
    const rows = [];
    // Construct first row
    rows.push([...Array(7).keys()].map((x, i) => (
        i < firstDayIndex
            ? { num: daysInPrevMonth - (firstDayIndex - 1 - i), otherMonth: true }
            : { num: i - firstDayIndex + 1, otherMonth: false }
    )));

    // Next 2 rows
    for (let j = 0; j < 2; j++) {
        rows.push([...Array(7).keys()].map((x, i) => ({ num: i + rows[j][6].num + 1, otherMonth: false })));
    }

    // Last 3 rows as needed
    for (let j = 2; j < 5; j++) {
        if (rows[j][6].num !== daysInCurrentMonth && rows[j].filter(i => (i.num === 1)).length !== 1) {
            rows.push([...Array(7).keys()].map((x, i) => (
                i + rows[j][6].num < daysInCurrentMonth
                    ? { num: i + 1 + rows[j][6].num, otherMonth: false }
                    : { num: i + rows[j][6].num - daysInCurrentMonth + 1, otherMonth: true }
            )));
        }
    }
    return rows;
}

export const getEventsByMonth = (events, year, m) => {
    const prevMonth = m === 1 ? 12 : m - 1;
    const nextMonth = m === 12 ? 1 : m + 1;
    const acceptable = [...Array(31).keys()].map((x, i) => (`${year}-${pad(m)}-${pad(i + 1)}`));
    acceptable.push(...[...Array(31).keys()].map((x, i) => (`${prevMonth === 12 ? year - 1 : year}-${pad(prevMonth)}-${pad(i + 1)}`)));
    acceptable.push(...[...Array(31).keys()].map((x, i) => (`${nextMonth === 1 ? year + 1 : year}-${pad(nextMonth)}-${pad(i + 1)}`)));
    const found = {
        currentMonth: {},
        otherMonth: {}
    };
    let month = -1;
    let day = -1;
    Object.keys(events).map(key => {
        if (acceptable.includes(key)) {
            month = key.substring(key.length - 5, key.length - 3);
            day = key.substring(key.length - 2);
            if (parseInt(month, 10) === m) {
                found.currentMonth = Object.assign({}, found.currentMonth, { [day]: events[key] });
            } else {
                found.otherMonth = Object.assign({}, found.otherMonth, { [day]: events[key] });
            }
        }
        return key;
    })
    return found;
}

export const getUpcomingEvents = (events, max) => {
    const current = parseDate(moment().format('YYYY-MM-DD'));
    let sortedKeys = Object.keys(events).sort((a, b) => {
        a = parseDate(a);
        b = parseDate(b);
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    sortedKeys = sortedKeys.filter(i =>
        parseDate(i) >= current
    );
    return sortedKeys.slice(0, max).map(i => ({ ...events[i], date: i }));
}

export const parseDate = date => (
    parseInt(date.replace(/-/g, ''), 10)
)

export const pad = d => (
    (d < 10) ? '0' + d.toString() : d.toString()
)