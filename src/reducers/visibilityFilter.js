import { SET_VISIBILITY_FILTER } from "../constants";

const INITIAL_STATE = 'SHOW_ALL';

const visibilityFilter = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter
