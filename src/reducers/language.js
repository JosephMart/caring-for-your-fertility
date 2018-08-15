import { CHANGE_LANGUAGE, ENGLISH } from '../constants';

const INITIAL_STATE = ENGLISH;

const language = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return action.language;
        default:
            return state
    }
}

export default language;
