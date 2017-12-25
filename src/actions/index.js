import { CHANGE_MONTH } from "../constants";

export const changeMonth = incrementVal => {
    return {
        type: CHANGE_MONTH,
        incrementVal
    }
}