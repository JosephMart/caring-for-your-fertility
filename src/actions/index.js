import { CHANGE_MONTH, CHANGE_LANGUAGE } from "../constants";

export const changeMonth = incrementVal => {
    return {
        type: CHANGE_MONTH,
        incrementVal
    }
}

// Change calendar language used
export const changeLang = lang => {
    return {
        type: CHANGE_LANGUAGE,
        lang
    }
}