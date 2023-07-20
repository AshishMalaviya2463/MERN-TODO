import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { todoFilterReducer } from "./todoFilterReducer";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers( {
    auth: authReducer,
    todoes: todoReducer,
    todoFilter: todoFilterReducer
} )