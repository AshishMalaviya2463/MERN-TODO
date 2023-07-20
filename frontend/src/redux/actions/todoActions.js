import axiosConfig from "../../axiosConfig/axiosConfig"
import { apiUrl, authToken } from "../../constant"
import { ADD_TODO, DELETE_TODO, GET_TODOES } from "../ActionTypes"

const headers = ( token ) => {
    return {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
}

export const addTodoAction = ( data, filter, setTodo ) => ( dispatch ) => {
    axiosConfig.post( `${apiUrl}/todo?filter=${filter}`, data, headers( localStorage.getItem( authToken ) ) )
        .then( data => {
            dispatch( { type: ADD_TODO, payload: data?.data } )
            setTodo( "" )
        } )
        .catch( err => {
            // console.log( "error", err?.response )
        } )
}

export const getTodoesAction = () => ( dispatch ) => {
    axiosConfig.get( `${apiUrl}/todo`, headers( localStorage.getItem( authToken ) ) )
        .then( data => {
            dispatch( { type: GET_TODOES, payload: data?.data } )
        } )
        .catch( err => {
            // console.log( "error", err?.response )
        } )
}

export const getTodoesByFilterAction = ( filter ) => ( dispatch ) => {
    axiosConfig.get( `${apiUrl}/todo?filter=${filter}`, headers( localStorage.getItem( authToken ) ) )
        .then( data => {
            dispatch( { type: GET_TODOES, payload: data?.data } )
        } )
        .catch( err => {
            // console.log( "error", err?.response )
        } )
}

export const deleteTodoAction = ( id, filter ) => ( dispatch ) => {
    axiosConfig.delete( `${apiUrl}/todo/${id}?filter=${filter}`, headers( localStorage.getItem( authToken ) ) )
        .then( data => {
            dispatch( { type: DELETE_TODO, payload: data?.data } )
        } )
        .catch( err => {
            // console.log( "error", err?.response )
        } )
}

export const updateTodoAction = ( id, data, filter, setTodo ) => ( dispatch ) => {
    axiosConfig.put( `${apiUrl}/todo/${id}?filter=${filter}`, data, headers( localStorage.getItem( authToken ) ) )
        .then( data => {
            dispatch( { type: ADD_TODO, payload: data?.data } )
            setTodo && setTodo( "" )
        } )
        .catch( err => {
            // console.log( "error", err?.response )
        } )
}