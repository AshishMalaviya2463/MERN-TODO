import { LOGOUT_USER, USER_LOGIN } from "../ActionTypes"

const initVal = {
    user: null,
    isLogin: false,
}

export const authReducer = ( state = initVal, action ) => {
    switch ( action.type ) {
        case USER_LOGIN:
            return action.payload
        case LOGOUT_USER:
            return {
                user: null,
                isLogin: false,
            }
        default:
            return state
    }
}