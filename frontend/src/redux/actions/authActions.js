import axios from "axios"
import { apiUrl, authToken } from "../../constant"
import { USER_LOGIN } from "../ActionTypes"

export const registerAction = ( data, resetAll ) => ( dispatch ) => {
    axios.post( `${apiUrl}/register`, data )
        .then( data => {
            alert( data?.data?.message )
            data?.status === 201 && resetAll()
        } )
        .catch( err => {
            alert( err?.response?.data?.message )
        } )
}

export const loginAction = ( data, resetAll, navigate ) => ( dispatch ) => {
    axios.post( `${apiUrl}/login`, data )
        .then( data => {
            localStorage.setItem( authToken, data?.data?.token )

            dispatch( {
                type: USER_LOGIN, payload: {
                    user: data?.data?.user,
                    isLogin: true
                }
            } )
            alert( data?.data?.message )
            setTimeout( () => {
                data?.data?.token && navigate( "/" )
            }, 300 )

            resetAll()
        } )
        .catch( err => {
            alert( err?.response?.data?.message )
        } )
}