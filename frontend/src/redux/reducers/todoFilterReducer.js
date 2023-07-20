import { CHANGE_TODO_FILTER } from "../ActionTypes"

const initVal = {
    filter: undefined
}

export const todoFilterReducer = ( state = initVal, action ) => {
    switch ( action.type ) {
        case CHANGE_TODO_FILTER:
            return {
                filter: action.payload
            }
        default:
            return state
    }
}