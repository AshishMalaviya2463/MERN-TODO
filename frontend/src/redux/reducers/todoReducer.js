import { ADD_TODO, CANCEL_EDIT_TODO, DELETE_TODO, EDIT_TODO, GET_TODOES } from "../ActionTypes"

const initVal = []

export const todoReducer = ( state = initVal, action ) => {
    switch ( action.type ) {
        case ADD_TODO:
            return action.payload
        case GET_TODOES:
            return action.payload
        case DELETE_TODO:
            return action.payload
        case EDIT_TODO:
            return {
                ...state,
                ...action.payload
            }
        case CANCEL_EDIT_TODO:
            const { editTodo, isEdit, todoFilter, ...rest } = state;
            return rest
        default:
            return state
    }
}