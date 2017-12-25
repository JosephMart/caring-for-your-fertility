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
