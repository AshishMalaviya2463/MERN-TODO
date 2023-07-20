import { CHANGE_TODO_FILTER } from "../ActionTypes"

export const changeTodoFilterAction = ( filter ) => ( dispatch ) => {
    dispatch( { type: CHANGE_TODO_FILTER, payload: filter } )
}