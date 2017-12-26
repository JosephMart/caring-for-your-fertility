import { GET_EVENTS_BY_MONTH } from "../constants";

export const getEventsByMonth = (year, month) => {
    return {
        type: GET_EVENTS_BY_MONTH,
        year,
        month
    };
}