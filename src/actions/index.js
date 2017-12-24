import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO, SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT } from '../constants'

let nextTodoId = 0
export const addTodo = text => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    }
}

export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        subreddit
    }
}

export function invalidateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        subreddit
    }
}
