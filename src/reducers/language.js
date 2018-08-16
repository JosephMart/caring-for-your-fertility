import { CHANGE_LANGUAGE, ENGLISH, SPANISH } from '../constants';

const INITIAL_STATE = window.location.href.includes('cuidandosufertilidad') ? SPANISH : ENGLISH;

const language = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return action.language;
        default:
            return state
    }
}

export default language;
